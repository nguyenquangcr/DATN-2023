import React, {useEffect, useState} from 'react';
import classNames from 'classnames';

// Assets
import styles from './styles.module.scss';

function LightBoxWidget(props) {
    const myRef = React.createRef();
    const [isOpen, setLightBoxOpen] = useState(true);
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        if (props.slides) {
            let isFindActive = false;

            // Validate slides
            let slides = props.slides.map((slide) => {
                if (slide.title && slide.photo && checkURL(slide.photo)) {
                    if (slide.active) {
                        isFindActive = true;
                    }

                    return slide;
                }
            });

            if (slides && slides.length) {
                if (!isFindActive) {
                    // Update first slide active
                    slides[0].active = true;
                }

                setSlides(slides);
            }
        }
    }, []);

    const checkURL = (url) => {
        try {
            let result = true;

            try {
                new URL(url);
            } catch (e) {
                result = false;
            }

            return result;
        } catch (error) {

        }
    };

    const onLoad = (image) => {
        if (myRef && myRef.current) {
            let photoItem = myRef.current.getElementsByClassName('photo-item');

            console.log('photoItem', photoItem);
        }

        console.log('onLoad', image);
    };

    const onClickClose = () => {
        setLightBoxOpen(false);
    };

    const onClickPrevious = () => {
        try {
            if (slides.length > 1) {
                let position = 0;

                slides.map((slide, key) => {
                    if (slide.active) {
                        position = key - 1;
                    }
                });

                if (position < 0) {
                    position = slides.length - 1;
                }

                let arrSlides = slides.map((slide, key) => {
                    slide.active = position === key;

                    return slide;
                });

                setSlides(arrSlides);
            }
        } catch (error) {
            // Error
        }
    };

    const onClickNext = () => {
        try {
            if (slides.length > 1) {
                let position = 0;

                slides.map((slide, key) => {
                    if (slide.active) {
                        position = key + 1;
                    }
                });

                position = position % slides.length;

                let arrSlides = slides.map((slide, key) => {
                    slide.active = position === key;

                    return slide;
                });

                setSlides(arrSlides);
            }
        } catch (error) {
            // Error
        }
    };

    let position = 1;
    const slide = slides.length && slides.find((slide, key) => {
        if (slide.active) {
            position = key + 1;
        }

        return slide.active;
    });

    return (
        <>
            <div ref={myRef} className={styles['light-box']}>
                {
                    isOpen ? (
                        <>
                            <div className={classNames(styles['overlay'])} />
                            <div className={classNames(styles['light-box-slideshow'])}>
                                <div className={classNames(styles['slide-current'])}>Ảnh {position}/{slides.length}</div>
                                <div className={classNames(styles['button-close'])} onClick={onClickClose} />
                                <div className={classNames(styles['previous-slide'])} onClick={onClickPrevious} />
                                <div className={classNames(styles['next-slide'])} onClick={onClickNext} />
                                {
                                    slide && slide.title && slide.photo ? (
                                        <>
                                            <div className={classNames(styles['photos'])}>
                                                {
                                                    slides.length ? slides.map((item, key) => {
                                                        return (
                                                            <div key={key.toString()} onClick={onClickNext} className={classNames(styles['photo-item'], item.active && styles['active'])} >
                                                                <img onLoad={onLoad(item)} alt={item.title} src={item.photo} />
                                                            </div>
                                                        );
                                                    }) : null
                                                }

                                            </div>
                                            {
                                                slide.title ? (
                                                    <div className={classNames(styles['title'])}><span>{slide.title}</span></div>
                                                ) : null
                                            }
                                        </>
                                    ) : null
                                }
                            </div>
                        </>
                    ) : null
                }
            </div>
        </>
    );
}

const defaultProps = {
    isOpen: false,
    zIndex: 10,
    slides: [
        {
            title: 'Những căn bếp gỗ vừa truyền thống vừa hiện đại khiến ai ai cũng thấy vừa lòng',
            photo: 'https://image.tuoitreplus.com/upload/2020/05/31/660/nhung-can-bep-go-vua-truyen-thong-vua-hien-dai-khi-0.jpg',
            active: true
        },
        {
            title: 'Đông y mách bạn cách dưỡng ngũ tạng: Bệnh chỉ là ngọn, phải phòng chữa từ gốc',
            photo: 'https://image.tuoitreplus.com/upload/2020/05/31/660/dong-y-mach-ban-cach-duong-ngu-tang-benh-chi-la-ng-0.jpg'
        },
        {
            title: 'Đông y mách bạn cách dưỡng ngũ tạng: Bệnh chỉ là ngọn, phải phòng chữa từ gốc',
            photo: 'https://image.tuoitreplus.com/upload/2020/05/31/660/dong-y-mach-ban-cach-duong-ngu-tang-benh-chi-la-ng-1.jpg'
        },
        {
            title: 'Đông y mách bạn cách dưỡng ngũ tạng: Bệnh chỉ là ngọn, phải phòng chữa từ gốc',
            photo: 'https://image.tuoitreplus.com/upload/2020/05/31/660/dong-y-mach-ban-cach-duong-ngu-tang-benh-chi-la-ng-4.jpg'
        }
    ]
};

LightBoxWidget.defaultProps = defaultProps;

export default LightBoxWidget;
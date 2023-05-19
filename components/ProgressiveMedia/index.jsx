import React, {Fragment} from 'react';
import classnames from 'classnames';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// Assets
import styles from './styles.module.scss';
import NoImage from 'Static/images/no-image.png';

const defaultProps = {
    alt: '',
    thumb: NoImage,
    src: NoImage,
    scaleOnHover: true
};

class ProgressiveMedia extends React.Component {
    constructor(props) {
        super(props);

        this.myRef = React.createRef();
        this.width = props.width || '';
        this.height = props.height || '';
    }

    render() {
        return (
            <Fragment>
                <figure ref={this.myRef} className={styles['progressive-figure']} style={this.width ? {width: this.width} : {}}>
                    <div className={styles['aspect-ratio-placeholder']} style={this.height ? {height: this.height} : {}}>
                        <div className={styles['aspect-ratio-placeholder-fill']} style={{paddingBottom: '57.8%'}} />
                        <div className={classnames(styles['progressive-media'], styles['is-image-loaded'], {
                            [styles['scale-on-hover']]: this.props.scaleOnHover
                        })}>
                            <div className={classnames(styles['centered'])}>
                                {
                                    this.props.src ? (
                                        <img alt={this.props.alt} loading="lazy" src={this.props.thumb} data-src={this.props.src} className={classnames(styles['progressive-media-image'], 'lazyload w-full h-full')} />
                                    ) : null
                                }
                                <noscript>
                                    <img alt={this.props.alt} loading="lazy" src={this.props.src} className={classnames(styles['progressive-media-image'], 'w-full h-full')} />
                                </noscript>
                            </div>
                        </div>
                    </div>
                </figure>
            </Fragment>
        );
    }
}

ProgressiveMedia.defaultProps = defaultProps;

export default ProgressiveMedia;

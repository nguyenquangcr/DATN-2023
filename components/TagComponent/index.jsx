import React from 'react';
import {createTag} from '../../services/Tag';

const TagComponent = ({post}) => {

    const formatTag = (namTag) => {
        switch (namTag) {
            case 'thoi-trang':
                return 'thoitrang';
            case 'lam-dep': 
                return 'lamdep';
            case 'doi-song':
                return 'doisong';
            case 'am-thuc':
                return 'amthuc';
            case 'du-lich': 
                return 'dulich';
            case 'tu-vi':
                return 'tuvi';
            case 'suc-khoe':
                return 'suckhoe';
            case 'kham-pha':
                return 'khampha';
            default:
                break;
        }
    };

    React.useEffect(async() => {
        await createTag({name: formatTag(post?.category?.shorten)});
    }, []);

    return (
        <></>
    );
};

export default TagComponent;
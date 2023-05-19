import React, {useRef, useEffect, useState} from 'react';
import classNames from 'classnames';

import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import FroalaEditor from 'froala-editor';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import 'froala-editor/js/plugins.pkgd.min.js';
// Import a single Froala Editor plugin.
import 'froala-editor/js/plugins/align.min.js';

// Import a language file.
// import 'froala-editor/js/languages/de.js';

// Import a third-party plugin.
import 'froala-editor/js/third_party/image_tui.min.js';
import 'froala-editor/js/third_party/embedly.min.js';
// import 'froala-editor/js/third_party/spell_checker.min.js';

// Include font-awesome css if required.
// install using "npm install font-awesome --save"
// import 'font-awesome/css/font-awesome.css';
// import 'froala-editor/js/third_party/font_awesome.min.js';

// Include special components if required.
// import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
// import FroalaEditorA from 'react-froala-wysiwyg/FroalaEditorA';
// import FroalaEditorButton from 'react-froala-wysiwyg/FroalaEditorButton';
// import FroalaEditorImg from 'react-froala-wysiwyg/FroalaEditorImg';
// import FroalaEditorInput from 'react-froala-wysiwyg/FroalaEditorInput';

// Assets
import './styles.scss';

function Editor(props) {
    const [model, setModel] = useState('<p>Tiếp nối thành công của phần 1, phần 2 bộ phim truyền hình bom tấn Penthouse vừa mới lên sóng đã đạt sức hút khủng. Có thể nói, đây là một sản phẩm được đầu tư hết sức chỉn chu từ kịch bản, diễn xuất, bối cảnh cho đến phục trang của các diễn viên. Xoay quanh cuộc sống của những con người thuộc tầng lớp thượng lưu nên ở mỗi cảnh phim, khán giả đều được 1 phen mãn nhãn những trang phục hàng hiệu đắt đỏ.</p><div class="attachment-album"><div class="attachment-album-content"><div class="attachment-album-row attachment-album-two"><figure class="attachment-album-item"><a title><img alt src="//image.meovathay.vn/upload/2021/03/02/660/boc-gia-do-ngu-cua-ac-nu-cheon-seo-jin-penthouse-2-0-fsi9qe.jpg"></a></figure><figure class="attachment-album-item"><a title><img alt src="//image.meovathay.vn/upload/2021/03/02/660/boc-gia-do-ngu-cua-ac-nu-cheon-seo-jin-penthouse-2-1-5rcdci.jpg"></a></figure></div></div><div class="attachment-album-caption"><p></p></div></div><p>Trong số đó, nhân vật cô giáo Cheon Seo Jin có thể nói chính là “yêu nữ hàng hiệu” của bộ phim. Xuất thân trong gia đình tài phiệt, thừa kế gia tài khủng của gia đình, kết hôn với Chủ tịch Ju Dan Tae giàu có và là nữ chủ nhân của căn penthouse tòa tháp Hera, vậy nên những gì cô giáo Cheon Seo Jin khoác lên mình chắc chắn cũng phải tương xứng với vị thế của cô rồi! Độ giàu sang của cô giáo Cheon Seo Jin không thể hiện ở đâu xa mà ở ngay những bộ đồ ngủ chỉ xuất hiện chớp nhoáng trong 4 tập đầu này. Chỉ là đồ ngủ thôi cũng đắt đỏ cỡ này thì mới đúng đẳng cấp của giới siêu giàu chứ. </p><div class="attachment-center"><figure class="attachment-image image"><img alt="Bóc giá đồ ngủ của ác nữ Cheon Seo Jin (Penthouse 2): Toàn hàng hiệu sang xịn, có bộ lên tới 44 triệu đồng - Ảnh 2." src="//image.meovathay.vn/upload/2021/03/02/660/boc-gia-do-ngu-cua-ac-nu-cheon-seo-jin-penthouse-2-2-ndspmk.jpg"><figcaption>Trong tập 4 vừa lên sóng, cô giáo Cheon Seo Jin xuất hiện đầy quyến rũ trong thiết kế váy ngủ thướt tha, mềm mại đến từ thương hiệu LA PERLA. Soi kỹ, dân tình không khỏi giật mình khi chiếc váy ngủ này có giá gốc lên đến 44 triệu đồng</figcaption></figure></div><div class="attachment-center"><figure class="attachment-image image"><img alt="Bóc giá đồ ngủ của ác nữ Cheon Seo Jin (Penthouse 2): Toàn hàng hiệu sang xịn, có bộ lên tới 44 triệu đồng - Ảnh 3." src="//image.meovathay.vn/upload/2021/03/02/660/boc-gia-do-ngu-cua-ac-nu-cheon-seo-jin-penthouse-2-3-t7ra0a.jpg"><figcaption>Ở tập 3, bộ váy ngủ màu kem gợi cảm, nhã nhặn mà cô giáo Cheon Seo Jin khoác lên mình cũng có mức giá khủng là gần 16 triệu đồng. Được biết đây là thiết kế đến từ thương hiệu Hàn Quốc LIUMINA</figcaption></figure></div><div class="attachment-center"><figure class="attachment-image image"><img alt="Bóc giá đồ ngủ của ác nữ Cheon Seo Jin (Penthouse 2): Toàn hàng hiệu sang xịn, có bộ lên tới 44 triệu đồng - Ảnh 4." src="//image.meovathay.vn/upload/2021/03/02/660/boc-gia-do-ngu-cua-ac-nu-cheon-seo-jin-penthouse-2-4-pjxcdx.jpg"><figcaption>Là một sản phẩm của thương hiệu nội địa Hàn - WATA, chiếc váy ngủ ren sexy này có giá nhẹ nhàng hơn cả nhưng cũng “ngốn” mất gần 4 triệu đồng</figcaption></figure></div><div class="attachment-center"><figure class="attachment-image image"><img alt="Bóc giá đồ ngủ của ác nữ Cheon Seo Jin (Penthouse 2): Toàn hàng hiệu sang xịn, có bộ lên tới 44 triệu đồng - Ảnh 5." src="//image.meovathay.vn/upload/2021/03/02/660/boc-gia-do-ngu-cua-ac-nu-cheon-seo-jin-penthouse-2-5-6shvi5.jpg"><figcaption>Ở tập đầu tiên, chiếc áo choàng tắm mà cô giáo cô giáo Cheon Seo Jin mặc cũng là thiết kế đắt đỏ đến từ thương hiệu thời trang cao cấp VERSACE, có giá đến gần 14 triệu đồng</figcaption></figure></div><p><i>Ảnh: Instagram; Internet</i></p>');

    FroalaEditor.DefineIcon('imageInfo', {NAME: 'info', SVG_KEY: 'help'});
    FroalaEditor.RegisterCommand('imageInfo', {
        title: 'Info',
        focus: false,
        undo: false,
        refreshAfterCallback: false,
        callback: function () {
            const $img = this.image.get();

            alert($img.attr('src'));
        }
    });

    const editorConfig = {
        heightMin: 300,
        fontSizeDefaultSelection: '18',
        placeholderText: 'Edit Your Content Here!',
        attribution: false, // Remove powered by Floala
        // toolbarInline: true,
        fontFamilySelection: true,
        fontSizeSelection: true,
        paragraphFormatSelection: true,
        linkAlwaysNoFollow: false,
        linkEditButtons: ['linkOpen', 'linkStyle', 'linkEdit', 'linkRemove'],
        imageEditButtons: ['imageReplace', 'imageDisplay', 'imageAlign', 'imageAlt', 'imageCaption', 'imageInfo', 'imageRemove'],
        events : {
            'focus' : function(e, editor) {
                console.log(editor);
            }
        }
    };

    const onModelChange = (model) => {
        console.log('model', model);
    };

    return (
        <div>
            <FroalaEditorComponent
                tag='textarea'
                config={editorConfig}
                model={model}
                onModelChange={onModelChange}
            />
        </div>
    );
}

const defaultProps = {

};

Editor.defaultProps = defaultProps;

export default Editor;

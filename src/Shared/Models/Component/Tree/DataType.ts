export namespace DataType {
  export type AbsoluteSize =
    | 'large'
    | 'medium'
    | 'small'
    | 'x-large'
    | 'x-small'
    | 'xx-large'
    | 'xx-small'
    | 'xxx-large';

  export type AnimateableFeature =
    | 'contents'
    | 'scroll-position'
    | (string & {});

  export type Attachment = 'fixed' | 'local' | 'scroll';

  export type BgPosition<TLength> =
    | TLength
    | 'bottom'
    | 'center'
    | 'left'
    | 'right'
    | 'top'
    | (string & {});

  export type BgSize<TLength> =
    | TLength
    | 'auto'
    | 'contain'
    | 'cover'
    | (string & {});

  export type BlendMode =
    | 'color'
    | 'color-burn'
    | 'color-dodge'
    | 'darken'
    | 'difference'
    | 'exclusion'
    | 'hard-light'
    | 'hue'
    | 'lighten'
    | 'luminosity'
    | 'multiply'
    | 'normal'
    | 'overlay'
    | 'saturation'
    | 'screen'
    | 'soft-light';

  export type Box = 'border-box' | 'content-box' | 'padding-box';

  export type Color =
    | NamedColor
    | DeprecatedSystemColor
    | 'currentcolor'
    | (string & {});

  export type CompatAuto =
    | 'button'
    | 'checkbox'
    | 'listbox'
    | 'menulist'
    | 'meter'
    | 'progress-bar'
    | 'push-button'
    | 'radio'
    | 'searchfield'
    | 'slider-horizontal'
    | 'square-button'
    | 'textarea';

  export type CompositeStyle =
    | 'clear'
    | 'copy'
    | 'destination-atop'
    | 'destination-in'
    | 'destination-out'
    | 'destination-over'
    | 'source-atop'
    | 'source-in'
    | 'source-out'
    | 'source-over'
    | 'xor';

  export type CompositingOperator =
    | 'add'
    | 'exclude'
    | 'intersect'
    | 'subtract';

  export type ContentDistribution =
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'stretch';

  export type ContentList = Quote | 'contents' | (string & {});

  export type ContentPosition =
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'start';

  export type CubicBezierTimingFunction =
    | 'ease'
    | 'ease-in'
    | 'ease-in-out'
    | 'ease-out'
    | (string & {});

  export type Dasharray<TLength> = TLength | (string & {}) | (number & {});

  export type DeprecatedSystemColor =
    | 'ActiveBorder'
    | 'ActiveCaption'
    | 'AppWorkspace'
    | 'Background'
    | 'ButtonFace'
    | 'ButtonHighlight'
    | 'ButtonShadow'
    | 'ButtonText'
    | 'CaptionText'
    | 'GrayText'
    | 'Highlight'
    | 'HighlightText'
    | 'InactiveBorder'
    | 'InactiveCaption'
    | 'InactiveCaptionText'
    | 'InfoBackground'
    | 'InfoText'
    | 'Menu'
    | 'MenuText'
    | 'Scrollbar'
    | 'ThreeDDarkShadow'
    | 'ThreeDFace'
    | 'ThreeDHighlight'
    | 'ThreeDLightShadow'
    | 'ThreeDShadow'
    | 'Window'
    | 'WindowFrame'
    | 'WindowText';

  export type DisplayInside =
    | '-ms-flexbox'
    | '-ms-grid'
    | '-webkit-flex'
    | 'flex'
    | 'flow'
    | 'flow-root'
    | 'grid'
    | 'ruby'
    | 'table';

  export type DisplayInternal =
    | 'ruby-base'
    | 'ruby-base-container'
    | 'ruby-text'
    | 'ruby-text-container'
    | 'table-caption'
    | 'table-cell'
    | 'table-column'
    | 'table-column-group'
    | 'table-footer-group'
    | 'table-header-group'
    | 'table-row'
    | 'table-row-group';

  export type DisplayLegacy =
    | '-ms-inline-flexbox'
    | '-ms-inline-grid'
    | '-webkit-inline-flex'
    | 'inline-block'
    | 'inline-flex'
    | 'inline-grid'
    | 'inline-list-item'
    | 'inline-table';

  export type DisplayOutside = 'block' | 'inline' | 'run-in';

  export type EasingFunction =
    | CubicBezierTimingFunction
    | StepTimingFunction
    | 'linear';

  export type EastAsianVariantValues =
    | 'jis04'
    | 'jis78'
    | 'jis83'
    | 'jis90'
    | 'simplified'
    | 'traditional';

  export type FinalBgLayer<TLength> =
    | Color
    | BgPosition<TLength>
    | RepeatStyle
    | Attachment
    | Box
    | 'none'
    | (string & {});

  export type FontStretchAbsolute =
    | 'condensed'
    | 'expanded'
    | 'extra-condensed'
    | 'extra-expanded'
    | 'normal'
    | 'semi-condensed'
    | 'semi-expanded'
    | 'ultra-condensed'
    | 'ultra-expanded'
    | (string & {});

  export type FontWeightAbsolute =
    | 'bold'
    | 'normal'
    | (number & {})
    | (string & {});

  export type GenericFamily =
    | 'cursive'
    | 'fantasy'
    | 'monospace'
    | 'sans-serif'
    | 'serif';

  export type GeometryBox =
    | Box
    | 'fill-box'
    | 'margin-box'
    | 'stroke-box'
    | 'view-box';

  export type GridLine = 'auto' | (string & {}) | (number & {});

  export type LineStyle =
    | 'dashed'
    | 'dotted'
    | 'double'
    | 'groove'
    | 'hidden'
    | 'inset'
    | 'none'
    | 'outset'
    | 'ridge'
    | 'solid';

  export type LineWidth<TLength> = TLength | 'medium' | 'thick' | 'thin';

  export type MaskLayer<TLength> =
    | Position<TLength>
    | RepeatStyle
    | GeometryBox
    | CompositingOperator
    | MaskingMode
    | 'no-clip'
    | 'none'
    | (string & {});

  export type MaskingMode = 'alpha' | 'luminance' | 'match-source';

  export type NamedColor =
    | 'aliceblue'
    | 'antiquewhite'
    | 'aqua'
    | 'aquamarine'
    | 'azure'
    | 'beige'
    | 'bisque'
    | 'black'
    | 'blanchedalmond'
    | 'blue'
    | 'blueviolet'
    | 'brown'
    | 'burlywood'
    | 'cadetblue'
    | 'chartreuse'
    | 'chocolate'
    | 'coral'
    | 'cornflowerblue'
    | 'cornsilk'
    | 'crimson'
    | 'cyan'
    | 'darkblue'
    | 'darkcyan'
    | 'darkgoldenrod'
    | 'darkgray'
    | 'darkgreen'
    | 'darkgrey'
    | 'darkkhaki'
    | 'darkmagenta'
    | 'darkolivegreen'
    | 'darkorange'
    | 'darkorchid'
    | 'darkred'
    | 'darksalmon'
    | 'darkseagreen'
    | 'darkslateblue'
    | 'darkslategray'
    | 'darkslategrey'
    | 'darkturquoise'
    | 'darkviolet'
    | 'deeppink'
    | 'deepskyblue'
    | 'dimgray'
    | 'dimgrey'
    | 'dodgerblue'
    | 'firebrick'
    | 'floralwhite'
    | 'forestgreen'
    | 'fuchsia'
    | 'gainsboro'
    | 'ghostwhite'
    | 'gold'
    | 'goldenrod'
    | 'gray'
    | 'green'
    | 'greenyellow'
    | 'grey'
    | 'honeydew'
    | 'hotpink'
    | 'indianred'
    | 'indigo'
    | 'ivory'
    | 'khaki'
    | 'lavender'
    | 'lavenderblush'
    | 'lawngreen'
    | 'lemonchiffon'
    | 'lightblue'
    | 'lightcoral'
    | 'lightcyan'
    | 'lightgoldenrodyellow'
    | 'lightgray'
    | 'lightgreen'
    | 'lightgrey'
    | 'lightpink'
    | 'lightsalmon'
    | 'lightseagreen'
    | 'lightskyblue'
    | 'lightslategray'
    | 'lightslategrey'
    | 'lightsteelblue'
    | 'lightyellow'
    | 'lime'
    | 'limegreen'
    | 'linen'
    | 'magenta'
    | 'maroon'
    | 'mediumaquamarine'
    | 'mediumblue'
    | 'mediumorchid'
    | 'mediumpurple'
    | 'mediumseagreen'
    | 'mediumslateblue'
    | 'mediumspringgreen'
    | 'mediumturquoise'
    | 'mediumvioletred'
    | 'midnightblue'
    | 'mintcream'
    | 'mistyrose'
    | 'moccasin'
    | 'navajowhite'
    | 'navy'
    | 'oldlace'
    | 'olive'
    | 'olivedrab'
    | 'orange'
    | 'orangered'
    | 'orchid'
    | 'palegoldenrod'
    | 'palegreen'
    | 'paleturquoise'
    | 'palevioletred'
    | 'papayawhip'
    | 'peachpuff'
    | 'peru'
    | 'pink'
    | 'plum'
    | 'powderblue'
    | 'purple'
    | 'rebeccapurple'
    | 'red'
    | 'rosybrown'
    | 'royalblue'
    | 'saddlebrown'
    | 'salmon'
    | 'sandybrown'
    | 'seagreen'
    | 'seashell'
    | 'sienna'
    | 'silver'
    | 'skyblue'
    | 'slateblue'
    | 'slategray'
    | 'slategrey'
    | 'snow'
    | 'springgreen'
    | 'steelblue'
    | 'tan'
    | 'teal'
    | 'thistle'
    | 'tomato'
    | 'transparent'
    | 'turquoise'
    | 'violet'
    | 'wheat'
    | 'white'
    | 'whitesmoke'
    | 'yellow'
    | 'yellowgreen';

  export type PageSize =
    | 'A3'
    | 'A4'
    | 'A5'
    | 'B4'
    | 'B5'
    | 'JIS-B4'
    | 'JIS-B5'
    | 'ledger'
    | 'legal'
    | 'letter';

  export type Paint =
    | Color
    | 'child'
    | 'context-fill'
    | 'context-stroke'
    | 'none'
    | (string & {});

  export type Position<TLength> =
    | TLength
    | 'bottom'
    | 'center'
    | 'left'
    | 'right'
    | 'top'
    | (string & {});

  export type Quote =
    | 'close-quote'
    | 'no-close-quote'
    | 'no-open-quote'
    | 'open-quote';

  export type RepeatStyle =
    | 'no-repeat'
    | 'repeat'
    | 'repeat-x'
    | 'repeat-y'
    | 'round'
    | 'space'
    | (string & {});

  export type SelfPosition =
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'self-end'
    | 'self-start'
    | 'start';

  export type SingleAnimation<TTime> =
    | EasingFunction
    | SingleAnimationDirection
    | SingleAnimationFillMode
    | TTime
    | 'infinite'
    | 'none'
    | 'paused'
    | 'running'
    | (string & {})
    | (number & {});

  export type SingleAnimationDirection =
    | 'alternate'
    | 'alternate-reverse'
    | 'normal'
    | 'reverse';

  export type SingleAnimationFillMode =
    | 'backwards'
    | 'both'
    | 'forwards'
    | 'none';

  export type SingleAnimationTimeline = 'auto' | 'none' | (string & {});

  export type SingleTransition<TTime> =
    | EasingFunction
    | TTime
    | 'all'
    | 'none'
    | (string & {});

  export type StepTimingFunction = 'step-end' | 'step-start' | (string & {});

  export type TrackBreadth<TLength> =
    | TLength
    | 'auto'
    | 'max-content'
    | 'min-content'
    | (string & {});

  export type ViewportLength<TLength> = TLength | 'auto' | (string & {});

  export type VisualBox = 'border-box' | 'content-box' | 'padding-box';
}

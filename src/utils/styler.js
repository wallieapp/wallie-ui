import classNames from 'classnames';

export const getClasses = (props, ...additionalStyles) => {
    const sharedRules = {
        'ds-flex': props.flex,
        'ds-flex__item': props.flexItem,
        [`ds-flex__${props.flexDirection}`]: props.flexDirection,
        [`ds-flex__align--${props.alignItems}`]: props.alignItems,
        [`ds-flex__align-self--${props.alignSelf}`]: props.alignSelf,
        [`ds-flex__justify--${props.justifyContent}`]: props.justifyContent,
        [`p-x-${props.paddingHorizontal}`]: props.paddingHorizontal,
        [`p-y-${props.paddingVertical}`]: props.paddingVertical,
        [`m-t-${props.marginTop}`]: props.marginTop,
        [`m-b-${props.marginBottom}`]: props.marginBottom,
        [`m-l-${props.marginLeft}`]: props.marginLeft,
        [`m-r-${props.marginRight}`]: props.marginRight,
        [`text--${props.textAlign}`]: props.textAlign,
        [`text--${props.fontWeight}`]: props.fontWeight,
        [`text--${props.fontSize}`]: props.fontSize,
        [`text--${props.textColor}`]: props.textColor,
        'text--scroll': props.scroll,
        'text--pre-wrap': props.preWrap,
        'w-100': props.fullWidth,
        'underline': props.underline,
        [`bg--${props.backgroundColor}`]: props.backgroundColor
    };

    return classNames(sharedRules, ...additionalStyles);
};
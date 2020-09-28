import React from 'react';
import './RippleEffect.css';
import * as PropTypes from 'prop-types';

const RippleEffect = ({children, duration, rippleColor, className, style, ...props}) => {
    const [ripples, setRipples] = React.useState([]);
    const [maxSize, setMaxSize] = React.useState(1);

    const addToRipples = (ripple) => {
        let newRipples = [...ripples];
        if (newRipples.length > (duration >= 1 ? duration * 3 : 1))
            newRipples = newRipples.slice(1, ripples.length);
        newRipples.push(ripple)
        setRipples(newRipples);
    };

    const handleClick = (e) => {
        var rect = e.target.getBoundingClientRect();
        const w = rect.right - rect.left;
        const h = rect.bottom - rect.top;
        setMaxSize(Math.max(w, h));
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        const id = new Date().getTime();
        const newRipple = {x: x, y: y, id: id};
        addToRipples(newRipple);
    }
    const wrapperClassName = className ? ['RippleEffect__wrapper', className].join(' ') : 'RippleEffect__wrapper';

    return (
        <div className={wrapperClassName} style={style ? style : {}}>
            {children}
            <div className="RippleEffect__ripplesWrapper">
            {
                ripples.map(ripple => (
                    <div
                        onClick={e => null}
                        key={ripple.id}
                        className="RippleEffect__ripple"
                        style={{
                            left: ripple.x - 1,
                            top: ripple.y,
                            '--scale': 2 * maxSize,
                            '--duration': duration + 's',
                            '--rippleColor': rippleColor
                        }}
                    />
                ))
            }
            </div>
            <div
                {...props}
                className="RippleEffect__overlay"
                style={{
                    '--duration': duration + 0.3 + 's',
                    '--rippleColor': rippleColor
                }}
                onMouseDown={handleClick}
                onClick={props.onClick}
            />
        </div>
    )
};

export default RippleEffect;

RippleEffect.propTypes = {
    children: PropTypes.any,
    duration: PropTypes.number,
    rippleColor: PropTypes.string,
    onClick: PropTypes.func
}

RippleEffect.defaultProps = {
    children: null,
    duration: 0.3, 
    rippleColor: 'rgba(255,255,255,0.4)',
    onClick: () => {}
}
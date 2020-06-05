import React, { useState, useRef, useEffect } from 'react';

function ReactMiniAlertConfirm(props) {

    const focusButton = useRef(null);
    const alertDom = useRef(null);

    const [alertAppend, setAlertAppend] = useState(false);
    const [alertReact, setAlertReact] = useState({
        show: false,
        text: '',
        ico: '',
        callback: false
    });

    useEffect(() => {

        setAlertAppend(props.show === true || props.show === undefined ? true : false);

        setAlertReact({
            show: props.show === true || props.show === undefined ? true : false,
            text: props.text ? props.text : '',
            ico: props.ico ? props.ico : '',
            callback: props.callback ? props.callback : false
        });

    }, []);

    useEffect(() => {

        let delay;

        if (alertReact.show) {

            delay = setTimeout(() => {

                setTimeout(() => { alertDom.current.classList.add('alert-enter'); }, 0);
                setTimeout(() => { alertDom.current.classList.add('alert-enter-done'); }, 25);
                setTimeout(() => { focusButton.current.focus(); }, 100);
                document.addEventListener("keyup", keyPressHandler);

            }, 0);

            return () => {

                document.removeEventListener("keyup", keyPressHandler);
                clearTimeout(delay);

            }

        } else {

            delay = setTimeout(() => {

                setTimeout(() => { alertDom.current.classList.remove('alert-enter'); }, 0);
                setTimeout(() => { alertDom.current.classList.remove('alert-enter-done'); }, 0);

            }, 0);

            return () => { clearTimeout(delay); }

        }

    }, [alertReact]);

    function keyPressHandler(e) {
        if (e.keyCode == 27) {
            handleClose();
        }
    }

    function handleClose() {

        setAlertReact({
            show: false,
            text: props.text ? props.text : '',
            ico: props.ico ? props.ico : '',
            callback: props.callback ? props.callback : false
        });

        setTimeout(() => { setAlertAppend(false); }, 330);

    }

    return (

        (!alertAppend ? '' :
            (<div ref={alertDom} className={"mini-alert-confirm show--button-area--confirm" + (alertReact.ico ? ' alert--' + alertReact.ico : '')}>
                <div className="box">
                    <div className="area">{alertReact.text}</div>
                    {
                        alertReact.callback && (
                            <div className="button-area button-area--confirm">
                                <button onClick={() => {
                                    alertReact.callback();
                                    handleClose();
                                }} className="btn btn--ok button">Ok</button>
                                <button ref={focusButton} onClick={handleClose} className="btn button">Cancel</button>
                            </div>
                        )
                    }
                    {
                        !alertReact.callback && (
                            <div className="button-area button-area--ok">
                                <button ref={focusButton} onClick={handleClose} className="btn button">Ok</button>
                            </div>
                        )
                    }
                </div>
            </div>)
        )

    );

}

export default ReactMiniAlertConfirm;
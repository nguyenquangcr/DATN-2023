import moment from 'moment';
import constant from 'Config/constant';

export const formatTime = (time, format = 'YYYY-MM-DD HH:mm:ss') => {
    try {
        // 07/03/2020 21:34:30 => 3 seconds ago
        // 07/03/2020 21:34:30 => 3 minutes, 15 seconds ago
        // 07/03/2020 21:34:30 => 3 hours ago
        // 07/03/2020 10:34:30 => >24h => 07/03/2020 10:34:30

        if (time) {
            let seconds = moment().diff(moment(time, format), 'seconds');

            if (seconds && +seconds > 0) {
                if (seconds < 60) {
                    return {
                        duration: seconds,
                        type: 'second',
                        string: '1 phút trước'
                    };
                } else {
                    let minutes = Math.round(seconds / 60);

                    if (minutes > 60) {
                        // Hours
                        let hours = Math.round(minutes / 60);

                        if (hours > 24) {
                            return {
                                duration: Math.round(hours / 24),
                                type: 'day',
                                string: moment(time).format('HH:mm | DD/MM')
                            };
                        } else {
                            let string = hours + ' giờ trước';

                            return {
                                duration: hours,
                                type: 'hour',
                                string: string
                            };
                        }
                    } else {
                        let string = minutes + ' phút trước';

                        return {
                            duration: minutes,
                            type: 'minute',
                            string: string
                        };
                    }
                }
            }
        }
    } catch (error) {
        // Error
    }
};

export const quoteDoubleToSingle = (message) => {
    return message.replace(/"/g, '\'');
};

export function handleError(error, payload) {
    try {
        if (process.env.ENV === 'development') {
            console.error('handleError', error);
        }

        // Send error log
        /*const monitor = require('@antscorp/monitor-javascript');

        monitor.init({
            pid: 1592307059795,
            env: process.env.ENV,
            host: 'http://monitor.tuoitreplus.com/api/monitor/error/'
        });

        monitor.handleError(error, {
            traceId: '',
            ...payload
        });*/

    } catch (e) {
        // Error
    }
}

export function mapSearchAndParam(value, direction = constant.SEARCH_TO_QUERY) {
    if (direction === constant.SEARCH_TO_QUERY) {
        return value.replace(/\s/g, '+');
    } else {
        return value.replace('+', /\s/g);
    }
}

export function getObjectPropSafely(fn, defaultValue = '') {
    try {
        return fn();
    } catch (e) {
        return defaultValue;
    }
}

export const getPostImage = (post, background = 'large') => {
    try {
        if (post && background) {
            if (background === 'large' && post.background) {
                return post.background;
            } else if (post.images && post.images[background]) {
                return post.images[background];
            } else if (post.background) {
                return post.background;
            }
        }
    } catch (error) {
        // Error
    }
};

export const gtagInject = (gaId) => {
    try {
        if (gaId) {
            const gaScript = document.createElement('script');

            const googleAnalyticsSource = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
            const s0 = document.getElementsByTagName('script')[0];

            gaScript.async = true;
            gaScript.setAttribute('src', googleAnalyticsSource);
            s0.parentNode.insertBefore(gaScript, s0);

            if (typeof window === 'undefined') {
                return;
            }

            window.dataLayer = window.dataLayer || [];
            gtagTrackingEvent('js', new Date());
            gtagTrackingEvent('config', gaId);
        }

    } catch (error) {
        // Error
    }
};

export const gtagTrackingEvent = (eventCategory, eventAction, args) => {
    try {
        // eslint-disable-next-line no-inner-declarations
        function tracking() {
            try {
                window.dataLayer.push(arguments);
            } catch (error) {
                // Error
            }
        }

        let params = {
            ...args
        };

        if (params && Object.keys(params).length && eventCategory !== 'js') {
            tracking(eventCategory, eventAction, params);
        } else {
            tracking(eventCategory, eventAction);
        }
    } catch (error) {
        // Error
    }
};

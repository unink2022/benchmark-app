import { ReactComponent as IconUp } from '../BNM_Metric_Up.svg';
import { ReactComponent as IconDown } from '../BNM_Metric_Down.svg';
import { ReactComponent as IconStale } from '../BNM_Metric_Stale.svg';

const Widget = ({ widget }) => {

    let performanceIcon = <IconStale />;
    let performanceClass = '';
    if (widget.performance > 0) {
        performanceIcon = <IconUp />;
        performanceClass = 'up';
    } else if (widget.performance < 0) {
        performanceIcon = <IconDown />;
        performanceClass = 'down';
    }

    return (
        <div className="widget-wrapper">
            <div className="widget-header">
                <div className="widget-heading">
                    {widget.heading}
                </div>
            </div>
            <div className="widget-body">
                <div className="widget-metric-wrapper">
                    <span className="widget-metric">{widget.metric} |</span>
                </div>
                <div className="widget-percentile-wrapper">
                    <div className={`widget-percentile ${performanceClass}`}>{widget.percentile}</div>
                </div>
                <div className="widget-icons-wrapper">
                    <div className="widget-util-icon-wrapper">
                        {performanceIcon}
                        <div className="widget-icon-subtext">pctl</div>
                    </div>
                </div>
            </div>
            <div className="widget-footer">
                <div className="widget-footer-text">
                    <span className="widget-footer-smalltext">Your performance from last week </span>
                    <span className={`widget-footer-performance ${performanceClass}`}>{widget.performance}%</span>
                </div>
            </div>
        </div>
    );
}

export default Widget;
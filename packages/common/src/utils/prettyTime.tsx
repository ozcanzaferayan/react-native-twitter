type Template = {
  prefix: string,
  suffix: string
}
var prettyTime = function (templates: Template, time: string) {
  if (!time) return;
  var now = new Date();
  var releasedDate = new Date(time);
  var seconds = ((now.getTime() - releasedDate.getTime()) * .001) >> 0;
  var minutes = seconds / 60;
  var hours = minutes / 60;
  var days = hours / 24;
  var years = days / 365;

  return templates.prefix + (
    seconds < 45 && template(templates, 'seconds', seconds)
    || seconds < 90 && template(templates, 'minute', 1)
    || minutes < 45 && template(templates, 'minutes', minutes)
    || minutes < 90 && template(templates, 'hour', 1)
    || hours < 24 && template(templates, 'hours', hours)
    || hours < 42 && template(templates, 'day', 1)
    || days < 30 && template(templates, 'days', days)
    || days < 45 && template(templates, 'month', 1)
    || days < 365 && template(templates, 'months', days / 30)
    || years < 1.5 && template(templates, 'year', 1)
    || template(templates, 'years', years))
    + templates.suffix;
};
var template = function (templates: Template, template:string, n:number) {
  return Object.keys(templates).filter(x => x === template)[0]
  && Object.keys(templates).filter(x => x === template)[0].replace(/%d/i, Math.abs(Math.round(n)).toString());
};

export default prettyTime;
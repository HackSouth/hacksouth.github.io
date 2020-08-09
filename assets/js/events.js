$(function() {
  var $eventsEl = $('.calendar-events');
  if ($eventsEl.length > 0) {
    var start = encodeURIComponent(moment().format("YYYY-MM-DDTHH:mm:ssZ"));
    var end = encodeURIComponent(moment().add(2, 'M').format("YYYY-MM-DDTHH:mm:ssZ"));
    var dateRange = `timeMin=${start}&timeMax=${end}`;
   
    $.getJSON('https://www.googleapis.com/calendar/v3/calendars/hacksouthza@gmail.com/events?singleEvents=true&orderBy=startTime&key=AIzaSyDBYQkd46PpGDbk2sl0ya-SiyZ_z9a790s&' + dateRange, function(data) {
      $.each(data.items, function(key, val) {
        if (val.start.dateTime) {
          var eventStart = moment(val.start.dateTime).format("D MMM");
        } else {
          var eventStart = moment(val.start.date).format("D MMM");
        }
        
        var $summaryLink = $(`<a href="${val.htmlLink}" target="_blank"></a>`).text(val.summary);
        $eventsEl.append($(`<li><span class="calendar-event-date">${eventStart}</span> - </li>`).append($summaryLink));
      });
    });
  }
});
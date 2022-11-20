/* http://keith-wood.name/datepick.html
   Russian localisation for jQuery Datepicker.
   Written by Andrew Stromnov (stromnov@gmail.com). */
(function($) {
	'use strict';
	$.datepick.regionalOptions.ru = {
		monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
		'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
		monthNamesShort: ['Января','Февраля','Марта','Апреля','Мая','Июня',
		'Июля','Августа','Сентября','Октября','Ноября','Декабря'],
		dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
		dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		dateFormat: 'dd.mm.yyyy',
		firstDay: 1,
		renderer: $.datepick.defaultRenderer,
		prevText: '&#x3c;Пред',
		prevStatus: '',
		prevJumpText: '&#x3c;&#x3c;',
		prevJumpStatus: '',
		nextText: 'След&#x3e;',
		nextStatus: '',
		nextJumpText: '&#x3e;&#x3e;',
		nextJumpStatus: '',
		currentText: 'Сегодня',
		currentStatus: '',
		todayText: 'Сегодня',
		todayStatus: '',
		clearText: 'Очистить',
		clearStatus: '',
		closeText: 'Закрыть',
		closeStatus: '',
		yearStatus: '',
		monthStatus: '',
		weekText: 'Не',
		weekStatus: '',
		dayStatus: 'D, M d',
		defaultStatus: '',
		isRTL: false
	};
	$.datepick.setDefaults($.datepick.regionalOptions.ru);
})(jQuery);

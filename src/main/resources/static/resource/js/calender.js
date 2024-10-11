
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth', // 기본 보기를 월간 그리드로 설정
        locale: 'ko', // 한국어 설정
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: [ // 기본 이벤트 추가
            {
                title: 'Event 1',
                start: '2024-10-01'
            },
            {
                title: 'Event 2',
                start: '2024-10-05',
                end: '2024-10-07'
            }
        ]
    });
    calendar.render(); // 캘린더 렌더링
});
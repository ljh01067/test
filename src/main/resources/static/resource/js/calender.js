
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth', // 기본 보기를 월간 그리드로 설정
        locale: 'ko', // 한국어 설정
        headerToolbar: {
            right: 'prev,next today',
            center: 'title',
            left: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: [
            // 서버에서 받은 날짜 데이터를 여기에 추가
            {
                title: '복용 시작일', // 예시 제목
                start: '2023-10-12', // 입력된 날짜
            },
        ]
    });
    calendar.render(); // 캘린더 렌더링
});
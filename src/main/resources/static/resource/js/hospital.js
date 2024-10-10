$(document).ready(function () {
    $(".message").click(function () {
        $(".message").addClass("hidden");
    });

    $(".message2").click(function () {
        $(".message2").addClass("hidden");
    });
});

// Google Maps 초기화 함수 추가
function initMap() {

    // 지도를 표시할 #map 요소를 찾음
    const mapDiv = document.getElementById("map");

    // #map 요소가 존재할 때에만 실행
    if (mapDiv) {
        // 지도 초기화: 서울 중심으로 설정
        const map = new google.maps.Map(mapDiv, {
            center: {lat: 37.5665, lng: 126.9780},  // 서울 좌표
            zoom: 12  // 확대 수준 설정
        });

        // 마커를 찍을 위치 목록 (위도, 경도와 설명을 배열로 설정)
        const locations = [
            {lat: 37.5665, lng: 126.9780, title: "서울"},
            {lat: 37.5700, lng: 126.9820, title: "서울 북쪽"},
            {lat: 37.5500, lng: 126.9900, title: "서울 남쪽"},
            {lat: 37.5300, lng: 126.9700, title: "서울 서쪽"},
            {lat: 37.5800, lng: 126.9850, title: "서울 동쪽"}
        ];

        // 마커 생성
        const markers = locations.map(location => {
            return new google.maps.Marker({
                position: {lat: location.lat, lng: location.lng},
                title: location.title
            });
        });

        // 마커 클러스터링 적용
        new MarkerClusterer(map, markers, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
    }
}

// DOM이 완전히 로드된 후 initMap 호출
document.addEventListener('DOMContentLoaded', function () {
    initMap();
});
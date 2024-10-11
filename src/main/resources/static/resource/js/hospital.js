$(document).ready(function () {
    $(".message").click(function () {
        $(".message").addClass("hidden");
    });

    $(".message2").click(function () {
        $(".message2").addClass("hidden");
    });

    // 페이지 로드 시 시 데이터를 서버에서 가져옴
    loadCities();
});

// 시 데이터 로드
function loadCities() {
    $.ajax({
        url: '/cities',
        method: 'GET',
        success: function(cities) {
            const citySelect = document.getElementById('city-select');
            cities.forEach(city => {
                const option = document.createElement('option');
                option.value = city;
                option.text = city;
                citySelect.appendChild(option);
            });
        }
    });
}

// 선택한 시에 맞는 군/구 데이터를 로드
function loadCounties() {
    const selectedCity = document.getElementById('city-select').value;
    const countySelect = document.getElementById('county-select');

    if (!selectedCity) {
        countySelect.innerHTML = '<option value="">시/군/구 선택</option>';
        return;  // 시가 선택되지 않았으면 실행하지 않음
    }


    // 세종특별자치시 처리 (군/구 선택 없음)
    if (selectedCity === "세종특별자치시") {
        countySelect.innerHTML = '<option value="">시/군/구 없음</option>';
        countySelect.disabled = true;  // 군/구 선택 비활성화
    } else {
        countySelect.disabled = false;
        $.ajax({
            url: '/counties',
            method: 'GET',
            data: { city: selectedCity },
            success: function(counties) {
                countySelect.innerHTML = '<option value="">시/군/구 선택</option>';  // 기존 군 데이터 초기화

                counties.forEach(county => {
                    const option = document.createElement('option');
                    option.value = county;
                    option.text = county;
                    countySelect.appendChild(option);
                });
            }
        });
    }

    // $.ajax({
    //     url: '/counties',
    //     method: 'GET',
    //     data: { city: selectedCity },
    //     success: function(counties) {
    //         const countySelect = document.getElementById('county-select');
    //         countySelect.innerHTML = '<option value="">군/구 선택</option>';  // 기존 군 데이터 초기화
    //
    //         counties.forEach(county => {
    //             const option = document.createElement('option');
    //             option.value = county;
    //             option.text = county;
    //             countySelect.appendChild(option);
    //         });
    //     }
    // });
}

// 선택된 시/군/구를 좌표로 변환하여 지도 중심 이동
function geocodeAddress() {
    const selectedCity = document.getElementById('city-select').value;
    const selectedCounty = document.getElementById('county-select').value;

    if (!selectedCity || (selectedCity !== "세종특별자치시" && !selectedCounty)) {
        alert("시와 군/구를 모두 선택하세요.");
        return;
    }

    const geocoder = new google.maps.Geocoder();
    const address = selectedCity + (selectedCity !== "세종특별자치시" ? " " + selectedCounty : "");

    geocoder.geocode({ 'address': address }, function(results, status) {
        if (status === 'OK') {
            map.setCenter(results[0].geometry.location);
            map.setZoom(14);  // 줌 설정
            new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
                title: address
            });
        } else {
            alert('Geocode 실패: ' + status);
        }
    });
}

// Google Maps 초기화 함수
let map;

function initMap() {
    // 지도 초기화: 서울 중심으로 설정
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 37.5665, lng: 126.9780 },  // 서울 좌표
        zoom: 12  // 확대 수준 설정
    });
    console.log(map);  // map 객체가 제대로 생성되었는지 확인
}

// // Google Maps 초기화 함수 추가
// function initMap() {
//
//     // 지도를 표시할 #map 요소를 찾음
//     const mapDiv = document.getElementById("map");
//
//     // #map 요소가 존재할 때에만 실행
//     if (mapDiv) {
//         // 지도 초기화: 서울 중심으로 설정
//         const map = new google.maps.Map(mapDiv, {
//             center: {lat: 37.5665, lng: 126.9780},  // 서울 좌표
//             zoom: 12  // 확대 수준 설정
//         });
//
//         // 마커를 찍을 위치 목록 (위도, 경도와 설명을 배열로 설정)
//         const locations = [
//             {lat: 37.5665, lng: 126.9780, title: "서울"},
//             {lat: 37.5700, lng: 126.9820, title: "서울 북쪽"},
//             {lat: 37.5500, lng: 126.9900, title: "서울 남쪽"},
//             {lat: 37.5300, lng: 126.9700, title: "서울 서쪽"},
//             {lat: 37.5800, lng: 126.9850, title: "서울 동쪽"}
//         ];
//
//         // 마커 생성
//         const markers = locations.map(location => {
//             return new google.maps.Marker({
//                 position: {lat: location.lat, lng: location.lng},
//                 title: location.title
//             });
//         });
//
//         // 마커 클러스터링 적용
//         new MarkerClusterer(map, markers, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
//     }
// }

// DOM이 완전히 로드된 후 initMap 호출
document.addEventListener('DOMContentLoaded', function () {
    initMap();
});
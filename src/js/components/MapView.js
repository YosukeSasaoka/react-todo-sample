import React from 'react';
import CSSModules from 'react-css-modules';
import ReactDOM from 'react-dom';
import style from './MapView.less';

@CSSModules( style )
export default class MapView extends React.Component {
  constructor( props ) {
    super( props );
    this.state = { map: null }
  }

  componentWillMount() {
    // Code will be here
  }

  componentDidMount() {
    if(navigator.geolocation)
    {
      // 現在地を取得
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // 取得したデータの整理
          var data = position.coords;
          
          // 取得したデータの整理
          var geocoder = new google.maps.Geocoder();
          var sitepoint = new google.maps.LatLng(data.latitude, data.longitude);

          var mapOptions = {
            zoom: 16,
            center: sitepoint
          }
          var map = new google.maps.Map(ReactDOM.findDOMNode(this), mapOptions)
          var marker = new google.maps.Marker({
            map:map,
            draggable:true,
            animation: google.maps.Animation.DROP,
            position: sitepoint
          });
              
          geocoder.geocode({
              latLng: marker.getPosition()
            },
            (responses) => {
              if (responses && responses.length > 0) {
                document.getElementById('address').innerHTML = responses[0].formatted_address;
              }
          });

          google.maps.event.addListener(marker, 'dragend', (e) => {

            var obj = marker.getPosition();
            document.getElementById('info').innerHTML = e.latLng;

            map.panTo(marker.getPosition());

            geocoder.geocode({
              latLng: obj
            }, (responses) => {
              if (responses && responses.length > 0) {
                document.getElementById('address').innerHTML = responses[0].formatted_address;
              }
      
            });
          });

          this.setState({
             map: map
          });
        },
        (error) => {
          // エラーコード(error.code)の番号
          // 0:UNKNOWN_ERROR         原因不明のエラー
          // 1:PERMISSION_DENIED     利用者が位置情報の取得を許可しなかった
          // 2:POSITION_UNAVAILABLE  電波状況などで位置情報が取得できなかった
          // 3:TIMEOUT               位置情報の取得に時間がかかり過ぎた…
          
          // エラー番号に対応したメッセージ
          var errorInfo = [
            "原因不明のエラーが発生しました…。" ,
            "位置情報の取得が許可されませんでした…。" ,
            "電波状況などで位置情報が取得できませんでした…。" ,
            "位置情報の取得に時間がかかり過ぎてタイムアウトしました…。"
          ];
          
          // エラー番号
          var errorNo = error.code;
          
          // エラーメッセージ
          var errorMessage = "[エラー番号: " + errorNo + "]\n" + errorInfo[ errorNo ];
          
          // アラート表示
          alert( errorMessage );
        
        },
        {
		    	"enableHighAccuracy": false,
			    "timeout": 600000,
			    "maximumAge": 2000,
		    });
      
    }
    // 対応していない場合
    else
    {
      // エラーメッセージ
      var errorMessage = "お使いの端末は、GeoLacation APIに対応していません。" ;
      
      // アラート表示
      alert( errorMessage ) ;
    }
  }

  render() {
    return (
      <div styleName="map"></div>
    );
  }
}
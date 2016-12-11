import React from 'react';

export default class Geolocation extends React.Component {
  constructor( props ) {
    super( props );
    this.state = { 
      latitude: 0,
      longitude: 0,
      altitude: 0,
      accuracy: 0,
      altitudeAccuracy: 0,
      heading: 0,
      speed: 0,
    }
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
          this.setState(
            {
              latitude: data.latitude,
              longitude: data.longitude,
              altitude: data.altitude,
              accuracy: data.accuracy,
              altitudeAccuracy: data.altitudeAccuracy,
              heading: data.heading,
              speed: data.speed,
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
			    "timeout": 8000,
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
      <dl>
        <dt>緯度</dt><dd>{this.state.latitude}</dd>
        <dt>経度</dt><dd>{this.state.longitude}</dd>
        <dt>高度</dt><dd>{this.state.altitude}</dd>
        <dt>緯度、経度の精度</dt><dd>{this.state.accuracy}</dd>
        <dt>高度の精度</dt><dd>{this.state.altitudeAccuracy}</dd>
        <dt>方角</dt><dd>{this.state.heading}</dd>
        <dt>速度</dt><dd>{this.state.speed}</dd>
      </dl>
    );
  }
}
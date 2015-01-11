# weinre-demo
Steps for setting up weinre for debugging mobile apps on mobile devices

* Setup web app such that you can access it from both desktop and mobile devices

* Install weinre
```bash
npm install weinre -g
```

* Start weinre server by passing host computer IP
```bash
weinre --boundHost <host-computer-ip>
```

* Add script tag for weinre in your web app
```html
<script src="http://192.168.0.101:8080/target/target-script-min.js#anonymous"></script>
```

* Connect to weinre by accessing webapp from target mobile device
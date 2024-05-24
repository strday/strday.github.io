const p = new PANOLENS.ImagePanorama('images/3.jpg');
const p2 = new PANOLENS.ImagePanorama('images/5.jpg');
let c = document.querySelector('.mw')

var hot = [
    new THREE.Vector3(-2136.06, 16.30, 890.14),
    new THREE.Vector3(-3136.06, 296.30, -4290.14)
  ];

const v = new PANOLENS.Viewer({
    container: c,
    autoRotate: true,
    autoRotateSpeed: 0.3,
    controlBar: false,
});

p.link( p2, hot[0]);
p2.link( p, hot[1]);

v.add( p, p2 );

let new_infospot1 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Info);
new_infospot1.position.set(-1500, 150, 890);
new_infospot1.addEventListener('click', function () {
  alert('clicked')
  html2canvas(document.querySelector("#mw")).then(canvas => {
    document.body.appendChild(canvas)
  });
});
p.add(new_infospot1);
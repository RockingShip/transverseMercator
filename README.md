---
layout: home
title: "transverseMercator - Ellipsoidal Transverse Mercator Projection (Javascript)"
image: assets/favimage-840x472.jpg
---

### Work-In-Progress

![teaser](transverseMercator-480x480%4015.gif)

# transverseMercator

Ellipsoidal Transverse Mercator Projection (Javascript)

### Welcome to the Wonderful World of geospatial visualisation

The nicest about this projection is that Antarctica is correct in proportions. And unlike UTM, it is has no zones.

This project also contains a javascript port of [TransverseMercatorProj](https://geographiclib.sourceforge.io/html/TransverseMercatorProj.1.html) from the [`geographiclib`](https://geographiclib.sourceforge.io) (https://geographiclib.sourceforge.io) project.
Originally created by Charles Karney.

## Installation

```sh
  npm install transverseMercator
```

## Example

```javascript
  const nodeTM = require("transverseMercator");
  const tm = new nodeTM.TransverseMercator();

  const retXY = tm.toXY(42, 42);
  console.log(JSON.stringify(retXY));

  const retLatLon = tm.toLatLon(retXY.x, retXY.y);
  console.log(JSON.stringify(retLatLon));
```

## API

See `geographiclib`'s [`manpage`](https://geographiclib.sourceforge.io/html/TransverseMercatorProj.1.html) for a detailed description.

The default range of N/E coordinates are \[-10e6,+10e6\] and roughly \[-26e6,+26e6\] meters.

### Constructor

```javascript
  new TransverseMercator([k0], [extend], [a], [f]) => instance
```

Returns a transverseMercator instance. Parameters:

* `k0` (optional) - the scale k0 on the central meridian (default 0.9996)

* `extend` (optional) - use the extended domain

* `a` (optional) -  the ellipsoid via the equatorial radius (default 6378137)

* `f` (optional) -  the ellipsoid via the equatorial flattening. (default 1/298.257223563)

### toXY

Convert `lat/lon` in degrees to `E/N` coordinates in meters.

```javascript
  TransverseMercator.toXY(lat, lon, [lon0], [withGammaK]) => xy
```

parameters:

* `lat` - latitude

* `lon` - longitude

* `lon0` (optional) -  central meridian (default 0)

* `withGammaK` (optional) - non-zero to include gamma/k0 in return.  Makes performance slow with about 10%.

returns:

```
{
	x: [Easting in meters],
	y: [Northing in meters],
	gamma: [meridian convergence in degrees],
	k0: [scale]
}
```

### toLatLon

Convert `E/N` coordinates in meters to `lat/lon` in degrees

```javascript
  TransverseMercator.toLatLon(x, y, [lon0]) => latLon
```

parameters:

* `lat` - Easting in meters

* `lon` - Northing in meters

* `lon0` (optional) -  central meridian (default 0)

returns:

```
{
	lat: [Latitude in degrees],
	y: [Longitude in degrees],
	gamma: [meridian convergence in degrees],
	k0: [scale]
}
```

## Performance

This javascript version serves about 95k conversions per second on an AMD FX-8320E.
A non-zero `withGammaK` will slow `toXY()` with about 10%.

The original `TransverseMercatorProj` can serve about 240k conversions per second.

## Requirements

Plenty, but all way within your level.

## Source code

Grab one of the tarballs at [https://github.com/RockingShip/transverseMercator/releases](https://github.com/RockingShip/transverseMercator/releases) or checkout the latest code:

```sh
  git clone https://github.com/RockingShip/transverseMercator.git
```

## Versioning

Using [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/RockingShip/transverseMercator/tags).

## License

This project is licensed under the ISC - see the [LICENSE-ISC.txt](LICENSE-ISC.txt) file for details.

The `GeographicLib` library is `MIT/X11` and compatible with this project.

## Acknowledgments

* Charles Karney and his amazing work on his GeographicLib library.

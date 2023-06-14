function getFeatureCoordinate(feature) {
    var geometry = feature.getGeometry();
    var coordinate = geometry.getCoordinates();
    return coordinate;
}
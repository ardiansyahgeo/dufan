var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_mushola_1 = new ol.format.GeoJSON();
var features_mushola_1 = format_mushola_1.readFeatures(json_mushola_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mushola_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mushola_1.addFeatures(features_mushola_1);
var lyr_mushola_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mushola_1, 
                style: style_mushola_1,
                interactive: true,
                title: '<img src="styles/legend/mushola_1.png" /> mushola'
            });
var format_toilet_2 = new ol.format.GeoJSON();
var features_toilet_2 = format_toilet_2.readFeatures(json_toilet_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_toilet_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_toilet_2.addFeatures(features_toilet_2);
var lyr_toilet_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_toilet_2, 
                style: style_toilet_2,
                interactive: true,
                title: '<img src="styles/legend/toilet_2.png" /> toilet'
            });
var format_wahana_3 = new ol.format.GeoJSON();
var features_wahana_3 = format_wahana_3.readFeatures(json_wahana_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wahana_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wahana_3.addFeatures(features_wahana_3);
var lyr_wahana_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_wahana_3, 
                style: style_wahana_3,
                interactive: true,
                title: '<img src="styles/legend/wahana_3.png" /> wahana'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_mushola_1.setVisible(true);lyr_toilet_2.setVisible(true);lyr_wahana_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_mushola_1,lyr_toilet_2,lyr_wahana_3];
lyr_mushola_1.set('fieldAliases', {'NAME': 'NAME', 'POINT_X': 'POINT_X', 'arah': 'arah', 'foto': 'foto', });
lyr_toilet_2.set('fieldAliases', {'NAME': 'NAME', 'POINT_X': 'POINT_X', 'arah': 'arah', 'foto': 'foto', });
lyr_wahana_3.set('fieldAliases', {'NAME': 'NAME', 'POINT_X': 'POINT_X', 'arah': 'arah', 'foto': 'foto', });
lyr_mushola_1.set('fieldImages', {'NAME': 'TextEdit', 'POINT_X': 'TextEdit', 'arah': 'TextEdit', 'foto': 'ExternalResource', });
lyr_toilet_2.set('fieldImages', {'NAME': 'TextEdit', 'POINT_X': 'TextEdit', 'arah': 'TextEdit', 'foto': 'TextEdit', });
lyr_wahana_3.set('fieldImages', {'NAME': 'TextEdit', 'POINT_X': 'TextEdit', 'arah': 'TextEdit', 'foto': 'ExternalResource', });
lyr_mushola_1.set('fieldLabels', {'NAME': 'inline label', 'POINT_X': 'inline label', 'arah': 'inline label', 'foto': 'inline label', });
lyr_toilet_2.set('fieldLabels', {'NAME': 'inline label', 'POINT_X': 'inline label', 'arah': 'inline label', 'foto': 'inline label', });
lyr_wahana_3.set('fieldLabels', {'NAME': 'inline label', 'POINT_X': 'inline label', 'arah': 'inline label', 'foto': 'inline label', });
lyr_wahana_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
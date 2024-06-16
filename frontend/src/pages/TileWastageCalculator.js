import React, { useState } from 'react';

function TileWastageCalculator() {
    // States for different shapes and their measurements
    const [rectangleMeasurements, setRectangleMeasurements] = useState([]);
    const [triangleMeasurements, setTriangleMeasurements] = useState([]);
    const [semicircleMeasurements, setSemicircleMeasurements] = useState([]);

    // States for tile sizes, maintained regardless of shapes
    const [tileSize, setTileSize] = useState({ length: 0, width: 0, price: 0 });

    // Handlers to update shape counts and initialize their measurements
    const updateShapeMeasurements = (shapeType, count) => {
        const measurements = Array.from({ length: parseInt(count) }, () => ({ length: 0, width: 0 }));
        if (shapeType === 'rectangle') {
            setRectangleMeasurements(measurements);
        } else if (shapeType === 'triangle') {
            setTriangleMeasurements(measurements.map(() => ({ base: 0, height: 0 })));
        } else if (shapeType === 'semicircle') {
            setSemicircleMeasurements(measurements.map(() => ({ radius: 0 })));
        }
    };

    // Handle measurement change for shapes
    const handleMeasurementChange = (e, index, type, shape) => {
        const value = parseFloat(e.target.value) || 0;
        if (shape === 'rectangle') {
            const newMeasurements = [...rectangleMeasurements];
            newMeasurements[index][type] = value;
            setRectangleMeasurements(newMeasurements);
        } else if (shape === 'triangle') {
            const newMeasurements = [...triangleMeasurements];
            newMeasurements[index][type] = value;
            setTriangleMeasurements(newMeasurements);
        } else if (shape === 'semicircle') {
            const newMeasurements = [...semicircleMeasurements];
            newMeasurements[index][type] = value;
            setSemicircleMeasurements(newMeasurements);
        }
    };

    // Handle tile size changes
    const handleTileSizeChange = (e, type) => {
        setTileSize({ ...tileSize, [type]: parseFloat(e.target.value) || 0 });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder logic for calculations
        console.log('Calculations would be performed here', {
            rectangleMeasurements,
            triangleMeasurements,
            semicircleMeasurements,
            tileSize
        });
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', padding: '20px' }}>
            <h1>Tile Wastage Calculator</h1>
            <form onSubmit={handleSubmit}>
                {/* Tile Size Inputs */}
                <h2>Tile Size</h2>
                <label>Tile Length (in cm):</label> <br/>
                <input type="number" value={tileSize.length} onChange={(e) => handleTileSizeChange(e, 'length')} min="0" /><br/>
                <label>Tile Width (in cm):</label><br/>
                <input type="number" value={tileSize.width} onChange={(e) => handleTileSizeChange(e, 'width')} min="0" /><br/>
                <label>Tile Price (in Rs):</label><br/>
                <input type="number" value={tileSize.price} onChange={(e) => handleTileSizeChange(e, 'price')} min="0" />

                {/* Rectangle Inputs */}
                <h2>Rectangles</h2>
                <label>Number of Rectangles:</label>
                <input
                    type="number"
                    value={rectangleMeasurements.length}
                    onChange={(e) => updateShapeMeasurements('rectangle', e.target.value)}
                    min="0"
                />
                {rectangleMeasurements.map((measurement, index) => (
                    <div key={index}>
                        <label>Rectangle {index + 1} Length:</label>
                        <input
                            type="number"
                            value={measurement.length}
                            onChange={(e) => handleMeasurementChange(e, index, 'length', 'rectangle')}
                            min="0"
                        />
                        <label>Width:</label>
                        <input
                            type="number"
                            value={measurement.width}
                            onChange={(e) => handleMeasurementChange(e, index, 'width', 'rectangle')}
                            min="0"
                        />
                    </div>
                ))}

                {/* Triangle Inputs */}
                <h2>Triangles</h2>
                <label>Number of Triangles:</label>
                <input
                    type="number"
                    value={triangleMeasurements.length}
                    onChange={(e) => updateShapeMeasurements('triangle', e.target.value)}
                    min="0"
                />
                {triangleMeasurements.map((measurement, index) => (
                    <div key={index}>
                        <label>Triangle {index + 1} Base:</label>
                        <input
                            type="number"
                            value={measurement.base}
                            onChange={(e) => handleMeasurementChange(e, index, 'base', 'triangle')}
                            min="0"
                        />
                        <label>Height:</label>
                        <input
                            type="number"
                            value={measurement.height}
                            onChange={(e) => handleMeasurementChange(e, index, 'height', 'triangle')}
                            min="0"
                        />
                    </div>
                ))}

                {/* Semicircle Inputs */}
                <h2>Semicircles</h2>
                <label>Number of Semicircles:</label>
                <input
                    type="number"
                    value={semicircleMeasurements.length}
                    onChange={(e) => updateShapeMeasurements('semicircle', e.target.value)}
                    min="0"
                />
                {semicircleMeasurements.map((measurement, index) => (
                    <div key={index}>
                        <label>Semicircle {index + 1} Radius:</label>
                        <input
                            type="number"
                            value={measurement.radius}
                            onChange={(e) => handleMeasurementChange(e, index, 'radius', 'semicircle')}
                            min="0"
                        />
                    </div>
                ))}
                <br/><br/>

                <button type="submit">Calculate Wastage</button>
            </form>
        </div>
    );
}

export default TileWastageCalculator;

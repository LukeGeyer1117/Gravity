// The class for all stellar objects in the simulation.
class Body {
    // Initialize the new body with the given parameters.
    // Center at (0, 0, 0) if no positionis given.
    constructor(mass, volume, x=0, y=0, z=0) {
        this.mass = mass;
        this.volume = volume;
        this.x = x; this.y = y; this.z = z;
    }

    // Calculate and return the density of the object
    // using D = m / v.
    calcDensity() {
        return this.mass / this.volume;
    }

    // Calculate and return the radius of the object 
    // using V = 4/3 * pi * r^3. 
    calcRadius() {
        const pi = Math.PI;
        let r = ((3 * this.volume) / (4 * pi))**(1/3);
        return r;
    }
}

export { Body };
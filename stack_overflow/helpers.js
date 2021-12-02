/*
 * Check if a deep property exists
 */
 function checkNested( obj ) {
    const args = Array.prototype.slice.call( arguments, 1 );
    for( let i = 0; i < args.length; i++ ) {
        if( !obj || !obj.hasOwnProperty( args[ i ] ) )
            return false;
        obj = obj[ args[ i ] ];
    }
    return true;
}

/*
 * Check if string is encoded with encodeURIComponent
 */
function isEncoded( str ) {
    return typeof str === 'string' && decodeURIComponent( str ) !== str;
}

/*
 * Check if object is of type string
 */
function isString( str ) {
    return str && typeof str === 'string';
}

/*
 * Remove a list of properties from an object
 */
function removeProperties( obj, properties ) {
    for( let i = 0; i < properties.length; i++ )
        delete obj[ properties[ i ] ];
    return obj;
}

/*
 * Check if an object property is missing
 */
function isMissingProperty( obj, properties ) {
    let hasOwnProperty = false, i = 0;
    for( ; i < properties.length; i++ )
        if( !obj.hasOwnProperty( properties[ i ] ) )
            hasOwnProperty = properties[ i ];
    return hasOwnProperty;
}

/*
 * Check if an object property is present
 */
function containsProperty( obj, properties ) {
    let hasOwnProperty = false, i = 0;
    for( ; i < properties.length; i++ )
        if( !hasOwnProperty && obj.hasOwnProperty( properties[ i ] ) )
            hasOwnProperty = properties[ i ];
    return hasOwnProperty;
}

/*
 * Check if a JSON payload is respecting the size limit
 */
function payloadSizeMax( obj ) {
    return JSON.stringify( obj ).length >= 1536;
}

/*
 * Check email string with a regex
 */
function notValidEmail( email ) {
    return !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test( email );
}

/*
 * Check if a candidate password complies with the security requirements using a regex
 */
function notValidPassword( pass ) {
    return !/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/.test( pass );
}

/*
 * Flatten a 2D (nested) array
 * [1,2,[3,4]] -> [1,2,3,4]
 */
function flatten(arr) {
    return this.reduce(function(accum, elem) { return accum.concat(elem); }, []);
};

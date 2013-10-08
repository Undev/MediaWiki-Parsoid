/*
 * This is a sample configuration file.
 *
 * Copy this file to localsettings.js and edit that file to fit your needs.
 *
 * Also see the file ParserService.js for more information.
 */

exports.setup = function( parsoidConfig ) {
	// The URL here is supposed to be your MediaWiki API endpoint
	parsoidConfig.setInterwiki( 'localhost', 'http://localhost/api.php' );

	// Enable debug mode (prints extra debugging messages)
	// parsoidConfig.debug = true;

	// Use the PHP preprocessor to expand templates via the MW API (default true)
	//parsoidConfig.usePHPPreProcessor = false;

	// Use selective serialization (default false)
	//parsoidConfig.useSelser = true;

	// allow cross-domain requests to the API (default disallowed)
	//parsoidConfig.allowCORS = '*';
};


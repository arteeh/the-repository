/*
 * Citizen - Core JS
 * https://starcitizen.tools
 */

var searchToggle = document.getElementById( 'search-toggle' ),
	searchInput = document.getElementById( 'searchInput' ),
	pageReady = require( ( 'mediawiki.page.ready' ) );

/**
 * Focus in search box when search toggle checkbox is checked.
 *
 * @constructor
 */
function searchInputFocus() {
	if ( searchToggle.checked !== false ) {
		searchInput.focus();
	}
}

/**
 * Check search toggle checkbox when search box is in focus.
 *
 * @constructor
 */
function searchToggleCheck() {
	if ( searchToggle.checked === false ) {
		searchToggle.checked = true;
	}
}

function main() {
	searchToggle.addEventListener( 'click', searchInputFocus );
	searchInput.addEventListener( 'focus', searchToggleCheck );
	pageReady.loadSearchModule(
		// Decide between new Citizen implementation or core
		mw.config.get( 'wgCitizenEnableSearch' ) ?
			'skins.citizen.scripts.search' : 'mediawiki.searchSuggest'
	);
}

main();

export function log(value) {
    console.log(value);
}

/*ES Modules (import / export)

Named + Default exports

DOM events

Barrel imports

Custom Axios instance

Live binding concept */


/**npm init        # create package.json
npm install     # install dependencies
npm uninstall   # remove package
npm start       # run script
 */

/*This:

Adds to package.json

Creates node_modules

Creates package-lock.json */
/**npm install
   ↓
Reads package.json
   ↓
Downloads packages
   ↓
Creates node_modules
   ↓
Locks versions
 */

/**npm init -y
package.json
npm install axios
npm install axios
node_modules/
   axios/
   follow-redirects/
   form-data/
   Inside package.json:
   npm uninstall axios

   ...
 */
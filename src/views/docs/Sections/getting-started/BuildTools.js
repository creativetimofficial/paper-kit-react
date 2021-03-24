/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
import { Table } from "reactstrap";
class BuildTools extends React.Component {
  render() {
    return (
      <>
        <div className="bd-page-title">
          <h1 className="bd-title" id="content">
            Build tools
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="bd-lead">
          Learn how to use Paper Kit React to build your theme, compile SCSS,
          change brand-colors and more
        </p>
        <hr />
        <h2 id="available-commands">Available commands</h2>
        <p>(PS: Don't forget to scroll left and right the bellow table)</p>
        <div className="bd-example">
          <Table responsive>
            <thead>
              <tr>
                <th className="text-center">#</th>
                <th>Name</th>
                <th>Usage</th>
                <th className="text-left">Description</th>
                <th className="text-right">Read more</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">1</td>
                <td>
                  <code className="highlighter-rouge">install</code>
                </td>
                <td>
                  <code className="highlighter-rouge">npm install</code>
                </td>
                <td className="text-left">
                  This command installs a package, and any packages that it
                  depends on.
                </td>
                <td className="text-right">
                  <a
                    href="https://docs.npmjs.com/cli/install?ref=creativetim"
                    target="_blank"
                  >
                    Read more
                  </a>
                </td>
              </tr>
              <tr>
                <td className="text-center">2</td>
                <td>
                  <code className="highlighter-rouge">start</code>
                </td>
                <td>
                  <code className="highlighter-rouge">npm start</code>
                </td>
                <td className="text-left">
                  This will determinate the start of your development server.
                </td>
                <td className="text-right">
                  <a
                    href="https://facebook.github.io/create-react-app/docs/available-scripts#npm-start?ref=creativetim"
                    target="_blank"
                  >
                    Read more
                  </a>
                </td>
              </tr>
              <tr>
                <td className="text-center">3</td>
                <td>
                  <code className="highlighter-rouge">build</code>
                </td>
                <td>
                  <code className="highlighter-rouge">npm run build</code>
                </td>
                <td className="text-left">
                  This will create a build directory with a production build of
                  your app. (NOTE!!! you will have to delete or configure to
                  your specs the <code>homepage</code> from inside our{" "}
                  <code>package.json</code> file)
                </td>
                <td className="text-right">
                  <a
                    href="https://facebook.github.io/create-react-app/docs/available-scripts#npm-run-build?ref=creativetim"
                    target="_blank"
                  >
                    Read more
                  </a>
                </td>
              </tr>
              <tr>
                <td className="text-center">4</td>
                <td>
                  <code className="highlighter-rouge">test</code>
                </td>
                <td>
                  <code className="highlighter-rouge">npm run test</code>
                </td>
                <td className="text-left">
                  Runs the test watcher in an interactive mode. (Note that we
                  have not implemented any tests - this command is by default
                  from the create-react-app)
                </td>
                <td className="text-right">
                  <a
                    href="https://facebook.github.io/create-react-app/docs/available-scripts#npm-test?ref=creativetim"
                    target="_blank"
                  >
                    Read more
                  </a>
                </td>
              </tr>
              <tr>
                <td className="text-center">5</td>
                <td>
                  <code className="highlighter-rouge">eject</code>
                </td>
                <td>
                  <code className="highlighter-rouge">npm run eject</code>
                </td>
                <td className="text-left">
                  This command will remove the single build dependency from your
                  project. (We do not recommend using this command. Our product
                  may not work after using this command.)
                </td>
                <td className="text-right">
                  <a
                    href="https://facebook.github.io/create-react-app/docs/available-scripts#npm-run-eject?ref=creativetim"
                    target="_blank"
                  >
                    Read more
                  </a>
                </td>
              </tr>
              <tr>
                <td className="text-center">6</td>
                <td>
                  <code className="highlighter-rouge">install:clean</code>
                </td>
                <td>
                  <code className="highlighter-rouge">
                    npm run install:clean
                  </code>
                </td>
                <td className="text-left">
                  This command will remove the{" "}
                  <code className="highlighter-rouge">node_modules</code> folder
                  and{" "}
                  <code className="highlighter-rouge">package_lock.json</code>{" "}
                  file, and will install a fresh copy of them.
                </td>
                <td className="text-right" />
              </tr>
              <tr>
                <td className="text-center">7</td>
                <td>
                  <code className="highlighter-rouge">compile-sass</code>
                </td>
                <td>
                  <code className="highlighter-rouge">
                    npm run compile-sass
                  </code>
                </td>
                <td className="text-left">
                  This command will compile the scss files located inside{" "}
                  <code className="highlighter-rouge">
                    src/assets/scss{"/"}*
                  </code>{" "}
                  into{" "}
                  <code className="highlighter-rouge">
                    src/assets/css/paper-kit.css
                  </code>
                  .
                </td>
                <td className="text-right">
                  <a
                    href="https://www.npmjs.com/package/node-sass?ref=creativetim"
                    target="_blank"
                  >
                    Read more
                  </a>
                </td>
              </tr>
              <tr>
                <td className="text-center">8</td>
                <td>
                  <code className="highlighter-rouge">minify-sass</code>
                </td>
                <td>
                  <code className="highlighter-rouge">npm run minify-sass</code>
                </td>
                <td className="text-left">
                  This command will compile and minify the scss files located
                  inside{" "}
                  <code className="highlighter-rouge">
                    src/assets/scss{"/"}*
                  </code>{" "}
                  into{" "}
                  <code className="highlighter-rouge">
                    src/assets/css/paper-kit.min.css
                  </code>
                  .
                </td>
                <td className="text-right">
                  <a
                    href="https://www.npmjs.com/package/node-sass?ref=creativetim"
                    target="_blank"
                  >
                    Read more
                  </a>
                </td>
              </tr>
              <tr>
                <td className="text-center">9</td>
                <td>
                  <code className="highlighter-rouge">map-sass</code>
                </td>
                <td>
                  <code className="highlighter-rouge">npm run map-sass</code>
                </td>
                <td className="text-left">
                  This command will compile and map the scss files located
                  inside{" "}
                  <code className="highlighter-rouge">
                    src/assets/scss{"/"}*
                  </code>{" "}
                  into{" "}
                  <code className="highlighter-rouge">
                    src/assets/css/paper-kit.css.map
                  </code>
                  .
                </td>
                <td className="text-right">
                  <a
                    href="https://www.npmjs.com/package/node-sass?ref=creativetim"
                    target="_blank"
                  >
                    Read more
                  </a>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </>
    );
  }
}

export default BuildTools;

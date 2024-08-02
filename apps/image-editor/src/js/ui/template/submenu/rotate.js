/**
 * @param {Object} submenuInfo - submenu info for make template
 *   @param {Locale} locale - Translate text
 *   @param {Function} makeSvgIcon - svg icon generator
 * @returns {string}
 */
export default ({ makeSvgIcon }) => `
    <ul class="tui-image-editor-submenu-item">
        <li class="tie-rotate-button">
            <div class="tui-image-editor-button clockwise">
                <div>
                    ${makeSvgIcon(['normal', 'active'], 'rotate-clockwise', true)}
                </div>
                <label> 30 </label>
            </div>
            <div class="tui-image-editor-button counterclockwise">
                <div>
                    ${makeSvgIcon(['normal', 'active'], 'rotate-counterclockwise', true)}
                </div>
                <label> -30 </label>
            </div>
        </li>
    </ul>
`;

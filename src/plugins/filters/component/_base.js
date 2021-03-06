import { arrayEach } from '../../../helpers/array';
import { mixin } from '../../../helpers/object';
import localHooks from '../../../mixins/localHooks';
import stateSaver from '../../../mixins/stateSaver';

/**
 * @plugin Filters
 * @class BaseComponent
 */
class BaseComponent {
  constructor(hotInstance) {
    this.hot = hotInstance;
    /**
     * List of registered component UI elements.
     *
     * @type {Array}
     */
    this.elements = [];
    /**
     * Flag which determines if element is hidden.
     *
     * @type {boolean}
     */
    this.hidden = false;
  }

  /**
   * Reset elements to their initial state.
   */
  reset() {
    arrayEach(this.elements, ui => ui.reset());
  }

  /**
   * Hide component.
   */
  hide() {
    this.hidden = true;
  }

  /**
   * Show component.
   */
  show() {
    this.hidden = false;
  }

  /**
   * Check if component is hidden.
   *
   * @returns {boolean}
   */
  isHidden() {
    return this.hidden;
  }

  /**
   * Destroy element.
   */
  destroy() {
    this.clearLocalHooks();
    arrayEach(this.elements, ui => ui.destroy());
    this.elements = null;
    this.hot = null;
  }
}

mixin(BaseComponent, localHooks);
mixin(BaseComponent, stateSaver);

export default BaseComponent;

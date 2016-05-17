import {
    Component,
    ChangeDetectionStrategy,
    HostBinding,
    Input,
} from '@angular/core';


// TODO(josephperrott): Benchpress tests.
// TODO(josephperrott): Add ARIA attributes for progressbar "for".


/**
 * <md-progress-bar> component.
 */
@Component({
  selector: 'md-progress-bar',
  host: {
    'role': 'progressbar',
    'aria-valuemin': '0',
    'aria-valuemax': '100',
  },
  templateUrl: './components/progress-bar/progress-bar.html',
  styleUrls: ['./components/progress-bar/progress-bar.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdProgressBar {
  /** Value of the progressbar. Defaults to zero. Mirrored to aria-valuenow. */
  private _value: number = 0;

  @Input()
  @HostBinding('attr.aria-valuenow')
  get value() {
    return this._value;
  }

  set value(v: number) {
    this._value = clamp(v || 0);
  }

  /** Buffer value of the progress bar. Defaults to zero. */
  private _bufferValue: number = 0;

  @Input()
  get bufferValue() {
    return this._bufferValue;
  }

  set bufferValue(v: number) {
    this._bufferValue = clamp(v || 0);
  }

  /**
   * Mode of the progress bar.
   *
   * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
   * 'determinate'.
   * Mirrored to mode attribute.
   */
  @Input()
  @HostBinding('attr.mode')
  mode: 'determinate' | 'indeterminate' | 'buffer' | 'query' = 'determinate';

  /**
   * Gets the current transform value for the progress bar's primary indicator.
   * @internal
   */
  primaryTransform() {
    let scale = this.value / 100;
    return `scaleX(${scale})`;
  }

  /**
   * Gets the current transform value for the progress bar's buffer indicator.  Only used if the
   * progress mode is set to buffer, otherwise returns an undefined, causing no transformation.
   * @internal
   */
  bufferTransform() {
    if (this.mode == 'buffer') {
      let scale = this.bufferValue / 100;
      return `scaleX(${scale})`;
    }
  }
}

/** Clamps a value to be between two numbers, by default 0 and 100. */
function clamp(v: number, min = 0, max = 100) {
  return Math.max(min, Math.min(max, v));
}

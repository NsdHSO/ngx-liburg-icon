import {Component} from '@angular/core';
import { Spinner } from 'spin.js';

@Component({
             selector   : 'lib-spinner',
             templateUrl: './spinner.component.html',
             styleUrls  : ['./spinner.component.scss'],
           })
export class SpinnerComponent {
  opts = {
    lines    : 20, // The number of lines to draw
    length   : 80, // The length of each line
    width    : 8, // The line thickness
    radius   : 74, // The radius of the inner circle
    scale    : 0.7, // Scales overall size of the spinner
    corners  : 1, // Corner roundness (0..1)
    speed    : 1.9, // Rounds per second
    rotate   : 90, // The rotation offset
    animation: 'spinner-line-shrink', // The CSS animation name for the lines
    direction: 1, // 1: clockwise, -1: counterclockwise
    color    : '#ffffff', // CSS color or array of colors
    fadeColor: 'transparent', // CSS color or array of colors
    top      : '43%', // Top position relative to parent
    left     : '50%', // Left position relative to parent
    shadow   : '0 0 1px transparent', // Box-shadow for the lines
    zIndex   : 2000000000, // The z-index (defaults to 2e9)
    className: 'spinner', // The CSS class to assign to the spinner
    position : 'absolute', // Element positioning
  };

  target  = document.getElementById('foo') ?? undefined;

  spinner = new Spinner(this.opts).spin(this.target);
}

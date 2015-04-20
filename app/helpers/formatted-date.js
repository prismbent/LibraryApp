import Ember from 'ember';
import { formatDate } from '../utils/date-helpers';

export default Ember.HTMLBars.makeBoundHelper(function formattedDate(params) {
  return formatDate(params[0],params[1]);
});
import Component from "@ember/component";
import { action } from "@ember/object";
import { ajax } from "discourse/lib/ajax";
import { userPath } from "discourse/lib/url";

export default Component.extend({
  @action
  toggleAnonymous() {
    ajax(userPath("toggle-anon"), { type: "POST" }).then(() => {
      window.location.reload();
    });
  },

  get buttonLable() {
    if (this.currentUser.is_anonymous) {
      return "switch_from_anon";
    } else {
      return "switch_to_anon";
    }
  },

  get buttonClasses() {
    if (this.currentUser.is_anonymous) {
      return "btn-primary switch-to-anon";
    } else {
      return "btn-primary switch-from-anon";
    }
  }
});

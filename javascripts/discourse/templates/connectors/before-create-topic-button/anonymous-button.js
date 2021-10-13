export default {
  shouldRender(_, component) {
    return (
      component.currentUser &&
      component.siteSettings.allow_anonymous_posting &&
      (component.currentUser.admin ||
        component.currentUser.trust_level >=
          component.siteSettings.anonymous_posting_min_trust_level)
    );
  },
};

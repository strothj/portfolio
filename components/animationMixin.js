const calculateAnimationClasses = animation => {
  if (!animation) return '';

  return `animation-${animation}`;
};

export default {
  props: ['animation'],

  data() {
    return {
      animationClasses: calculateAnimationClasses(this.animation),
    };
  },
};

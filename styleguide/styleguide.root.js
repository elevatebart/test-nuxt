import './tailwind.css';

export default previewComponent => {
  // https://vuejs.org/v2/guide/render-function.html
  return {
    render(createElement) {
      return createElement(previewComponent);
    }
  };
};
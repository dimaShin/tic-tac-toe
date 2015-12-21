import DeepMerge from 'deep-merge';

export default DeepMerge(function (target, source, key) {
  if (Array.isArray(target)) {
    return [].concat(target, source);
  }

  return source;
});
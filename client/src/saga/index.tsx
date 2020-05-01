import watchRegister from './register.saga';
import watchToast from './toast.saga';

const watchers = [watchRegister, watchToast];

export default watchers;

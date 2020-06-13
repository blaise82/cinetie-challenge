import { encode } from '../../helpers/JWTOKEN';

const token = encode({
  email: 'admin@admin.com'
});


export default token;
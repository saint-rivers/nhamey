import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user.model';

@Pipe({
  name: 'user',
})
export class UserPipe implements PipeTransform {
  transform(user: User): string {
    return `${user.lastname} ${user.firstname}`;
  }
}

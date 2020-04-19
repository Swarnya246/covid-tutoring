import React from 'react';
import Button from '@tutorbook/button';
import SubjectSelect from '@tutorbook/subject-select';
import TimeslotInput from '@tutorbook/timeslot-input';
import { User, Timeslot, LessonRequest } from '@tutorbook/model';
import { Avatar } from '@rmwc/avatar';
import { TextField } from '@rmwc/textfield';
import { Typography } from '@rmwc/typography';
import { Dialog, DialogProps } from '@rmwc/dialog';

import styles from './user-dialog.module.scss';

interface UserDialogState {
  readonly request: LessonRequest;
}

interface UserDialogProps extends DialogProps {
  readonly user: User;
  readonly request?: LessonRequest;
  readonly className?: string;
}

export default class UserDialog extends React.Component<UserDialogProps> {
  public readonly state: UserDialogState;

  public constructor(props: UserDialogProps) {
    super(props);
    this.state = {
      request: props.request || new LessonRequest(),
    };
    this.handleSubjectsChange = this.handleSubjectsChange.bind(this);
    this.handleTimeslotChange = this.handleTimeslotChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
  }

  private handleSubjectsChange(subjects: string[]): void {}

  private handleTimeslotChange(timeslot: Timeslot): void {}

  private handleMessageChange(
    event: React.SyntheticEvent<HTMLInputElement>
  ): void {}

  public render(): JSX.Element {
    const { user, className, ...rest } = this.props;
    return (
      <Dialog {...rest} open>
        <div className={styles.contentWrapper}>
          <div className={styles.leftSide}>
            <Avatar
              src='https://lh3.googleusercontent.com/-2ZeeLPx2zIA/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJOyaBH4I4ySxbkrdmPwTbRp7T4lOA.CMID/s83-c/photo.jpg'
              size='xlarge'
              name={user.name}
              className={styles.avatar}
            />
          </div>
          <div className={styles.rightSide}>
            <Typography className={styles.name} use='headline4'>
              {user.name}
            </Typography>
            <Typography className={styles.bio} use='body1'>
              {user.bio}
            </Typography>
            <form className={styles.form}>
              <SubjectSelect
                outlined
                label='Subjects'
                className={styles.formField}
                onChange={this.handleSubjectsChange}
              />
              <TimeslotInput
                outlined
                label='Time'
                className={styles.formField}
                onChange={this.handleTimeslotChange}
              />
              <TextField
                outlined
                textarea
                rows={4}
                label='Message'
                className={styles.formField}
                onChange={this.handleMessageChange}
              />
              <Button className={styles.button} raised arrow>
                Request {user.firstName}
              </Button>
            </form>
          </div>
        </div>
      </Dialog>
    );
  }
}

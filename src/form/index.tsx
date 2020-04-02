import React from 'react'

import { TextField } from '@rmwc/textfield'
import { Select } from '@rmwc/select'
import { Button } from '@rmwc/button'
import { Card } from '@rmwc/card'

import styles from './index.module.scss'

interface InputProps { 
  readonly el: 'textfield' | 'textarea' | 'select';
  readonly label: string;
  readonly type?: 'email' | 'tel' | 'text';
  readonly [propName: string]: any;
}

interface FormProps { inputs: InputProps[]; submitLabel: string; }

export default class Form extends React.Component<FormProps, {}> {
  createInputs() {
    const inputs: JSX.Element[] = [];
    this.props.inputs.map((input, index) => {
      switch (input.el) {
        case 'textfield':
          inputs.push(<TextField 
            className={styles.formField} 
            outlined 
            key={index} 
            {...input} 
          />);
          break;
        case 'textarea':
          inputs.push(<TextField 
            className={styles.formField} 
            outlined 
            textarea
            key={index}
            rows={4}
            {...input}
          />);
          break;
        case 'select':
          inputs.push(<Select 
            className={styles.formField} 
            outlined 
            key={index} 
            {...input} 
          />);
          break;
      }
    });
    return inputs;
  }

  render() {
    return (
      <div className={styles.formWrapper}>
        <div className={styles.formContent}>
          <Card className={styles.form}>
            {this.createInputs()}
            <Button className={styles.formSubmitButton}
              label={this.props.submitLabel} 
              raised />
          </Card>
        </div>
      </div>
    );
  }
}
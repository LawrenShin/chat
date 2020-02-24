interface AProps {
    type?: string;
    payload: any;
  }

export const createAction = (props: AProps) => {
    const {
        type,
        payload,
    } = props;

    return {
        type,
        payload,
    }
}

const displayFieldError = (errors?: string[]): JSX.Element | null => {

    if (errors?.length){
      return (
        <span>
        {errors.map( (error: string) => (
          <p className="mt-2 text-sm text-red-500" key={error}>
            {error}
          </p>
        ))}
        </span>
      )
    }
    return null;
};

export default displayFieldError;
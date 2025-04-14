import Input from "../../atoms/Input";

interface ProjectFilterProps {
  query: string;
  onQueryChange: (query: string) => void;
  placeholder: string;
}

const Filter = ({ query, onQueryChange, placeholder }: ProjectFilterProps) => {
  return (
    <div className="max-w-md mx-auto mb-10">
      <Input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        className="w-full"
      />
    </div>
  );
};

export default Filter;

import {useState} from "react";

const AddButton: React.FC = () => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleIcon = () => {
        setIsChecked(prevState => !prevState);
    };

    return (
        <button
            onClick={toggleIcon}
        >
            {isChecked ? (
                <div>
                    <form>
                        Nome fornecedor
                    </form>
                    <form>
                        Preco
                    </form>
                </div>
            ) : (
                <button>Adicionar fornecedor</button>
            )}
        </button>
    );
};

export default AddButton;
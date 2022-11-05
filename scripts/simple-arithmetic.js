// Tokens

class TokenType {
    static Number = new TokenType('Number');
    static Plus = new TokenType('Plus');
    static Minus = new TokenType('Minus');
    static Multiply = new TokenType('Multiply');
    static Divide = new TokenType('Divide');
    static LParen = new TokenType('LParen');
    static RParen = new TokenType('RParen');

    constructor(name) {
        this.name = name;
    }

    toString() {
        return `Color.${this.name}`;
    }
}

class Token {
    constructor(type, value = null) {
        this.type = type;
        this.value = value;
    }

    toString() {
        return `Token(${this.type}${this.value ? `, ${this.value}` : ''})`;
    }
}

// Lexer

class Lexer {
    constructor(text) {
        this.text = text;
        this.pos = 0;
        this.currentChar = this.text[this.pos];
    }

    advance() {
        this.pos++;
        if (this.pos > this.text.length - 1) {
            this.currentChar = null;
        } else {
            this.currentChar = this.text[this.pos];
        }
    }

    generate_tokens() {
        let tokens = [];

        while (this.currentChar !== null) {
            if (/\s|\n/.test(this.currentChar)) {
                this.advance();
            }
            else if (/\.|,/.test(this.currentChar) || /\d/.test(this.currentChar)) {
                tokens.push(this.generate_number());
            }
            else if (this.currentChar === '+') {
                tokens.push(new Token(TokenType.Plus));
                this.advance();
            }
            else if (this.currentChar === '-') {
                tokens.push(new Token(TokenType.Minus));
                this.advance();
            }
            else if (this.currentChar === '*' || this.currentChar === 'x') {
                tokens.push(new Token(TokenType.Multiply));
                this.advance();
            }
            else if (this.currentChar === '/' || this.currentChar === ':') {
                tokens.push(new Token(TokenType.Divide));
                this.advance();
            }
            else if (this.currentChar === '(') {
                tokens.push(new Token(TokenType.LParen));
                this.advance();
            }
            else if (this.currentChar === ')') {
                tokens.push(new Token(TokenType.RParen));
                this.advance();
            }
            else {
                throw new Error(`Invalid character: ${this.currentChar}`);
            }
        }

        return tokens;
    }

    generate_number() {
        let decimal_point_count = 0;
        let numberStr = this.currentChar;
        this.advance();

        while (this.currentChar !== null && (/\.|,/.test(this.currentChar) || /\d/.test(this.currentChar))) {
            if (/\.|,/.test(this.currentChar)) {
                if (decimal_point_count === 1) {
                    this.advance();
                    break;
                }
                decimal_point_count++;
                numberStr += '.';
            }
            else {
                numberStr += this.currentChar;
            }
            this.advance();
        }

        if (numberStr.startsWith('.')) {
            numberStr = '0' + numberStr;
        }
        if (numberStr.endsWith('.')) {
            numberStr += '0';
        }

        return new Token(TokenType.Number, parseFloat(numberStr));
    }
}

// Nodes

class NumberNode {
    constructor(value) {
        this.value = value;
    }

    toString() {
        return `${this.value}`;
    }
}

class AddNode {
    constructor(summandA, summandB) {
        this.summandA = summandA;
        this.summandB = summandB;
    }

    toString() {
        return `${this.summandA} + ${this.summandB}`;
    }
}

class SubtractNode {
    constructor(minuend, subtrahend) {
        this.minuend = minuend;
        this.subtrahend = subtrahend;
    }

    toString() {
        return `${this.minuend} - ${this.subtrahend}`;
    }
}

class MultiplyNode {
    constructor(factorA, factorB) {
        this.factorA = factorA;
        this.factorB = factorB;
    }

    toString() {
        return `${this.factorA} * ${this.factorB}`;
    }
}

class DivideNode {
    constructor(dividend, divisor) {
        this.dividend = dividend;
        this.divisor = divisor;
    }

    toString() {
        return `${this.dividend} / ${this.divisor}`;
    }
}

class PlusNode {
    constructor(operand) {
        this.operand = operand;
    }

    toString() {
        return `+${this.operand}`;
    }
}

class MinusNode {
    constructor(operand) {
        this.operand = operand;
    }

    toString() {
        return `-${this.operand}`;
    }
}

// Parser

class Parser {
    constructor(tokens) {
        this.tokens = tokens;
        this.pos = 0;
        this.currentToken = this.tokens[this.pos];
    }

    advance() {
        this.pos++;
        if (this.pos > this.tokens.length - 1) {
            this.currentToken = null;
        } else {
            this.currentToken = this.tokens[this.pos];
        }
    }

    invalid_syntax() {
        throw new Error(`Invalid syntax: ${this.currentToken}`);
    }

    parse() {
        if (this.currentToken === null) {
            return null;
        }

        let result = this.expr();

        if (this.currentToken !== null) {
            this.invalid_syntax();
        }

        return result;
    }

    expr() {
        let result = this.term();

        while (this.currentToken !== null && (this.currentToken.type === TokenType.Plus || this.currentToken.type === TokenType.Minus)) {
            if (this.currentToken.type === TokenType.Plus) {
                this.advance();
                result = new AddNode(result, this.term());
            }
            else if (this.currentToken.type === TokenType.Minus) {
                this.advance();
                result = new SubtractNode(result, this.term());
            }
        }

        return result;
    }

    term() {
        let result = this.factor();

        while (this.currentToken !== null && (this.currentToken.type === TokenType.Multiply || this.currentToken.type === TokenType.Divide)) {
            if (this.currentToken.type === TokenType.Multiply) {
                this.advance();
                result = new MultiplyNode(result, this.factor());
            }
            else if (this.currentToken.type === TokenType.Divide) {
                this.advance();
                result = new DivideNode(result, this.factor());
            }
        }

        return result;
    }

    factor() {
        let token = this.currentToken;

        if (token.type === TokenType.LParen) {
            this.advance();
            let result = this.expr();
            if (this.currentToken.type !== TokenType.RParen) {
                this.invalid_syntax();
            }
            this.advance();
            return result;
        }
        else if (token.type === TokenType.Number) {
            this.advance();
            return new NumberNode(token.value);
        }
        else if (token.type === TokenType.Plus) {
            this.advance();
            return new PlusNode(this.factor());
        }
        else if (token.type === TokenType.Minus) {
            this.advance();
            return new MinusNode(this.factor());
        }

        this.invalid_syntax();
    }
}

// Values

class Number {
    constructor(value) {
        this.value = value;
    }

    toString() {
        return `${this.value}`;
    }
}

// Interpreter

class Interpreter {
    visit(node) {
        let methodName = `visit_${node.constructor.name}`;
        let method = this[methodName];
        return method.call(this, node);
    }

    visit_NumberNode(node) {
        return new Number(node.value);
    }

    visit_AddNode(node) {
        let summandA = this.visit(node.summandA);
        let summandB = this.visit(node.summandB);
        return new Number(summandA.value + summandB.value);
    }

    visit_SubtractNode(node) {
        let minuend = this.visit(node.minuend);
        let subtrahend = this.visit(node.subtrahend);
        return new Number(minuend.value - subtrahend.value);
    }

    visit_MultiplyNode(node) {
        let factorA = this.visit(node.factorA);
        let factorB = this.visit(node.factorB);
        return new Number(factorA.value * factorB.value);
    }

    visit_DivideNode(node) {
        let dividend = this.visit(node.dividend);
        let divisor = this.visit(node.divisor);
        try {
            return new Number(dividend.value / divisor.value);
        } catch (e) {
            throw new Error(`Runtime math error: ${dividend} / ${divisor}`);
        }
    }

    visit_PlusNode(node) {
        return this.visit(node.operand);
    }

    visit_MinusNode(node) {
        let operand = this.visit(node.operand);
        return new Number(-operand.value);
    }
}

function interprete(text) {
    const lexer = new Lexer(text);
    const tokens = lexer.generate_tokens();
    const parser = new Parser(tokens);
    const tree = parser.parse();
    if (tree === null) {
        return null;
    }
    const interpreter = new Interpreter();
    const result = interpreter.visit(tree);
    return result;
}

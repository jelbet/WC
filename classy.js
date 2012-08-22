/* Jison generated parser */
var classy = (function(){

var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"pgm":3,"cdl":4,"MAIN":5,"LBRACE":6,"vdl":7,"el":8,"RBRACE":9,"ENDOFFILE":10,"c":11,"CLASS":12,"id":13,"EXTENDS":14,"mdl":15,"VAR":16,"t":17,"SEMICOLON":18,"LPAREN":19,"RPAREN":20,"NATTYPE":21,"ID":22,"e":23,"NATLITERAL":24,"NUL":25,"NEW":26,"THIS":27,"IF":28,"ELSE":29,"FOR":30,"READNAT":31,"PRINTNAT":32,"PLUS":33,"MINUS":34,"TIMES":35,"EQUALITY":36,"GREATER":37,"NOT":38,"OR":39,"DOT":40,"ASSIGN":41,"$accept":0,"$end":1},
terminals_: {2:"error",5:"MAIN",6:"LBRACE",9:"RBRACE",10:"ENDOFFILE",12:"CLASS",14:"EXTENDS",16:"VAR",18:"SEMICOLON",19:"LPAREN",20:"RPAREN",21:"NATTYPE",22:"ID",24:"NATLITERAL",25:"NUL",26:"NEW",27:"THIS",28:"IF",29:"ELSE",30:"FOR",31:"READNAT",32:"PRINTNAT",33:"PLUS",34:"MINUS",35:"TIMES",36:"EQUALITY",37:"GREATER",38:"NOT",39:"OR",40:"DOT",41:"ASSIGN"},
productions_: [0,[3,7],[4,2],[4,0],[11,8],[7,5],[7,0],[15,11],[15,0],[17,1],[17,1],[13,1],[8,3],[8,2],[23,1],[23,1],[23,1],[23,2],[23,1],[23,11],[23,11],[23,3],[23,4],[23,3],[23,3],[23,3],[23,3],[23,3],[23,2],[23,3],[23,3],[23,3],[23,5],[23,4],[23,6],[23,3]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
}
},
table: [{3:1,4:2,5:[2,3],11:3,12:[1,4]},{1:[3]},{5:[1,5]},{4:6,5:[2,3],11:3,12:[1,4]},{13:7,22:[1,8]},{6:[1,9]},{5:[2,2]},{14:[1,10]},{6:[2,11],14:[2,11],18:[2,11],19:[2,11],20:[2,11],22:[2,11],33:[2,11],34:[2,11],35:[2,11],36:[2,11],37:[2,11],39:[2,11],40:[2,11],41:[2,11]},{7:11,16:[1,12],19:[2,6],22:[2,6],24:[2,6],25:[2,6],26:[2,6],27:[2,6],28:[2,6],30:[2,6],31:[2,6],32:[2,6],38:[2,6]},{13:13,22:[1,8]},{8:14,13:18,19:[1,26],22:[1,8],23:15,24:[1,16],25:[1,17],26:[1,19],27:[1,20],28:[1,21],30:[1,22],31:[1,23],32:[1,24],38:[1,25]},{13:29,17:27,21:[1,28],22:[1,8]},{6:[1,30]},{9:[1,31]},{18:[1,32],33:[1,33],34:[1,34],35:[1,35],36:[1,36],37:[1,37],39:[1,38],40:[1,39]},{18:[2,14],20:[2,14],33:[2,14],34:[2,14],35:[2,14],36:[2,14],37:[2,14],39:[2,14],40:[2,14]},{18:[2,15],20:[2,15],33:[2,15],34:[2,15],35:[2,15],36:[2,15],37:[2,15],39:[2,15],40:[2,15]},{18:[2,16],19:[1,41],20:[2,16],33:[2,16],34:[2,16],35:[2,16],36:[2,16],37:[2,16],39:[2,16],40:[2,16],41:[1,40]},{13:42,22:[1,8]},{18:[2,18],20:[2,18],33:[2,18],34:[2,18],35:[2,18],36:[2,18],37:[2,18],39:[2,18],40:[2,18]},{19:[1,43]},{19:[1,44]},{19:[1,45]},{19:[1,46]},{13:18,19:[1,26],22:[1,8],23:47,24:[1,16],25:[1,17],26:[1,19],27:[1,20],28:[1,21],30:[1,22],31:[1,23],32:[1,24],38:[1,25]},{13:18,19:[1,26],22:[1,8],23:48,24:[1,16],25:[1,17],26:[1,19],27:[1,20],28:[1,21],30:[1,22],31:[1,23],32:[1,24],38:[1,25]},{13:49,22:[1,8]},{22:[2,9]},{22:[2,10]},{7:50,9:[2,6],16:[1,12],21:[2,6],22:[2,6]},{10:[1,51]},{8:52,9:[2,13],13:18,19:[1,26],22:[1,8],23:15,24:[1,16],25:[1,17],26:[1,19],27:[1,20],28:[1,21],30:[1,22],31:[1,23],32:[1,24],38:[1,25]},{13:18,19:[1,26],22:[1,8],23:53,24:[1,16],25:[1,17],26:[1,19],27:[1,20],28:[1,21],30:[1,22],31:[1,23],32:[1,24],38:[1,25]},{13:18,19:[1,26],22:[1,8],23:54,24:[1,16],25:[1,17],26:[1,19],27:[1,20],28:[1,21],30:[1,22],31:[1,23],32:[1,24],38:[1,25]},{13:18,19:[1,26],22:[1,8],23:55,24:[1,16],25:[1,17],26:[1,19],27:[1,20],28:[1,21],30:[1,22],31:[1,23],32:[1,24],38:[1,25]},{13:18,19:[1,26],22:[1,8],23:56,24:[1,16],25:[1,17],26:[1,19],27:[1,20],28:[1,21],30:[1,22],31:[1,23],32:[1,24],38:[1,25]},{13:18,19:[1,26],22:[1,8],23:57,24:[1,16],25:[1,17],26:[1,19],27:[1,20],28:[1,21],30:[1,22],31:[1,23],32:[1,24],38:[1,25]},{13:18,19:[1,26],22:[1,8],23:58,24:[1,16],25:[1,17],26:[1,19],27:[1,20],28:[1,21],30:[1,22],31:[1,23],32:[1,24],38:[1,25]},{13:59,22:[1,8]},{13:18,19:[1,26],22:[1,8],23:60,24:[1,16],25:[1,17],26:[1,19],27:[1,20],28:[1,21],30:[1,22],31:[1,23],32:[1,24],38:[1,25]},{13:18,19:[1,26],22:[1,8],23:61,24:[1,16],25:[1,17],26:[1,19],27:[1,20],28:[1,21],30:[1,22],31:[1,23],32:[1,24],38:[1,25]},{18:[2,17],20:[2,17],33:[2,17],34:[2,17],35:[2,17],36:[2,17],37:[2,17],39:[2,17],40:[2,17]},{13:18,19:[1,26],22:[1,8],23:62,24:[1,16],25:[1,17],26:[1,19],27:[1,20],28:[1,21],30:[1,22],31:[1,23],32:[1,24],38:[1,25]},{13:18,19:[1,26],22:[1,8],23:63,24:[1,16],25:[1,17],26:[1,19],27:[1,20],28:[1,21],30:[1,22],31:[1,23],32:[1,24],38:[1,25]},{20:[1,64]},{13:18,19:[1,26],22:[1,8],23:65,24:[1,16],25:[1,17],26:[1,19],27:[1,20],28:[1,21],30:[1,22],31:[1,23],32:[1,24],38:[1,25]},{18:[2,28],20:[2,28],33:[2,28],34:[2,28],35:[2,28],36:[2,28],37:[2,28],39:[2,28],40:[1,39]},{20:[1,66],33:[1,33],34:[1,34],35:[1,35],36:[1,36],37:[1,37],39:[1,38],40:[1,39]},{18:[1,67]},{9:[2,8],13:29,15:68,17:69,21:[1,28],22:[1,8]},{1:[2,1]},{9:[2,12]},{18:[2,23],20:[2,23],33:[2,23],34:[2,23],35:[1,35],36:[2,23],37:[2,23],39:[2,23],40:[1,39]},{18:[2,24],20:[2,24],33:[2,24],34:[2,24],35:[1,35],36:[2,24],37:[2,24],39:[2,24],40:[1,39]},{18:[2,25],20:[2,25],33:[2,25],34:[2,25],35:[2,25],36:[2,25],37:[2,25],39:[2,25],40:[1,39]},{18:[2,26],20:[2,26],33:[1,33],34:[1,34],35:[1,35],39:[2,26],40:[1,39]},{18:[2,27],20:[2,27],33:[1,33],34:[1,34],35:[1,35],39:[2,27],40:[1,39]},{18:[2,29],20:[2,29],33:[1,33],34:[1,34],35:[1,35],36:[1,36],37:[1,37],39:[2,29],40:[1,39]},{18:[2,30],19:[1,71],20:[2,30],33:[2,30],34:[2,30],35:[2,30],36:[2,30],37:[2,30],39:[2,30],40:[2,30],41:[1,70]},{18:[2,31],20:[2,31],33:[1,33],34:[1,34],35:[1,35],36:[1,36],37:[1,37],39:[1,38],40:[1,39]},{20:[1,72],33:[1,33],34:[1,34],35:[1,35],36:[1,36],37:[1,37],39:[1,38],40:[1,39]},{20:[1,73],33:[1,33],34:[1,34],35:[1,35],36:[1,36],37:[1,37],39:[1,38],40:[1,39]},{18:[1,74],33:[1,33],34:[1,34],35:[1,35],36:[1,36],37:[1,37],39:[1,38],40:[1,39]},{18:[2,21],20:[2,21],33:[2,21],34:[2,21],35:[2,21],36:[2,21],37:[2,21],39:[2,21],40:[2,21]},{20:[1,75],33:[1,33],34:[1,34],35:[1,35],36:[1,36],37:[1,37],39:[1,38],40:[1,39]},{18:[2,35],20:[2,35],33:[2,35],34:[2,35],35:[2,35],36:[2,35],37:[2,35],39:[2,35],40:[2,35]},{7:76,9:[2,6],16:[1,12],19:[2,6],21:[2,6],22:[2,6],24:[2,6],25:[2,6],26:[2,6],27:[2,6],28:[2,6],30:[2,6],31:[2,6],32:[2,6],38:[2,6]},{9:[1,77]},{13:78,22:[1,8]},{13:18,19:[1,26],22:[1,8],23:79,24:[1,16],25:[1,17],26:[1,19],27:[1,20],28:[1,21],30:[1,22],31:[1,23],32:[1,24],38:[1,25]},{13:18,19:[1,26],22:[1,8],23:80,24:[1,16],25:[1,17],26:[1,19],27:[1,20],28:[1,21],30:[1,22],31:[1,23],32:[1,24],38:[1,25]},{18:[2,33],20:[2,33],33:[2,33],34:[2,33],35:[2,33],36:[2,33],37:[2,33],39:[2,33],40:[2,33]},{6:[1,81]},{13:18,19:[1,26],22:[1,8],23:82,24:[1,16],25:[1,17],26:[1,19],27:[1,20],28:[1,21],30:[1,22],31:[1,23],32:[1,24],38:[1,25]},{18:[2,22],20:[2,22],33:[2,22],34:[2,22],35:[2,22],36:[2,22],37:[2,22],39:[2,22],40:[2,22]},{9:[2,5],19:[2,5],21:[2,5],22:[2,5],24:[2,5],25:[2,5],26:[2,5],27:[2,5],28:[2,5],30:[2,5],31:[2,5],32:[2,5],38:[2,5]},{5:[2,4],12:[2,4]},{19:[1,83]},{18:[2,32],20:[2,32],33:[2,32],34:[2,32],35:[2,32],36:[2,32],37:[2,32],39:[2,32],40:[2,32]},{20:[1,84],33:[1,33],34:[1,34],35:[1,35],36:[1,36],37:[1,37],39:[1,38],40:[1,39]},{8:85,13:18,19:[1,26],22:[1,8],23:15,24:[1,16],25:[1,17],26:[1,19],27:[1,20],28:[1,21],30:[1,22],31:[1,23],32:[1,24],38:[1,25]},{18:[1,86],33:[1,33],34:[1,34],35:[1,35],36:[1,36],37:[1,37],39:[1,38],40:[1,39]},{13:29,17:87,21:[1,28],22:[1,8]},{18:[2,34],20:[2,34],33:[2,34],34:[2,34],35:[2,34],36:[2,34],37:[2,34],39:[2,34],40:[2,34]},{9:[1,88]},{13:18,19:[1,26],22:[1,8],23:89,24:[1,16],25:[1,17],26:[1,19],27:[1,20],28:[1,21],30:[1,22],31:[1,23],32:[1,24],38:[1,25]},{13:90,22:[1,8]},{29:[1,91]},{20:[1,92],33:[1,33],34:[1,34],35:[1,35],36:[1,36],37:[1,37],39:[1,38],40:[1,39]},{20:[1,93]},{6:[1,94]},{6:[1,95]},{6:[1,96]},{8:97,13:18,19:[1,26],22:[1,8],23:15,24:[1,16],25:[1,17],26:[1,19],27:[1,20],28:[1,21],30:[1,22],31:[1,23],32:[1,24],38:[1,25]},{8:98,13:18,19:[1,26],22:[1,8],23:15,24:[1,16],25:[1,17],26:[1,19],27:[1,20],28:[1,21],30:[1,22],31:[1,23],32:[1,24],38:[1,25]},{7:99,16:[1,12],19:[2,6],22:[2,6],24:[2,6],25:[2,6],26:[2,6],27:[2,6],28:[2,6],30:[2,6],31:[2,6],32:[2,6],38:[2,6]},{9:[1,100]},{9:[1,101]},{8:102,13:18,19:[1,26],22:[1,8],23:15,24:[1,16],25:[1,17],26:[1,19],27:[1,20],28:[1,21],30:[1,22],31:[1,23],32:[1,24],38:[1,25]},{18:[2,19],20:[2,19],33:[2,19],34:[2,19],35:[2,19],36:[2,19],37:[2,19],39:[2,19],40:[2,19]},{18:[2,20],20:[2,20],33:[2,20],34:[2,20],35:[2,20],36:[2,20],37:[2,20],39:[2,20],40:[2,20]},{9:[1,103]},{9:[2,8],13:29,15:104,17:69,21:[1,28],22:[1,8]},{9:[2,7]}],
defaultActions: {6:[2,2],28:[2,9],29:[2,10],51:[2,1],52:[2,12],104:[2,7]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this,
        stack = [0],
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    //this.reductionCount = this.shiftCount = 0;

    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    if (typeof this.lexer.yylloc == 'undefined')
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);

    if (typeof this.yy.parseError === 'function')
        this.parseError = this.yy.parseError;

    function popStack (n) {
        stack.length = stack.length - 2*n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

    function lex() {
        var token;
        token = self.lexer.lex() || 1; // $end = 1
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    };

    var symbol, preErrorSymbol, state, action, a, r, yyval={},p,len,newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length-1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol == null)
                symbol = lex();
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {

            if (!recovering) {
                // Report error
                expected = [];
                for (p in table[state]) if (this.terminals_[p] && p > 2) {
                    expected.push("'"+this.terminals_[p]+"'");
                }
                var errStr = '';
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+this.lexer.showPosition()+'\nExpecting '+expected.join(', ');
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == 1 /*EOF*/ ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr,
                    {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol == EOF) {
                    throw new Error(errStr || 'Parsing halted.');
                }

                // discard current lookahead and grab another
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            while (1) {
                // check for error recovery rule in this state
                if ((TERROR.toString()) in table[state]) {
                    break;
                }
                if (state == 0) {
                    throw new Error(errStr || 'Parsing halted.');
                }
                popStack(1);
                state = stack[stack.length-1];
            }

            preErrorSymbol = symbol; // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {

            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(this.lexer.yytext);
                lstack.push(this.lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = this.lexer.yyleng;
                    yytext = this.lexer.yytext;
                    yylineno = this.lexer.yylineno;
                    yyloc = this.lexer.yylloc;
                    if (recovering > 0)
                        recovering--;
                } else { // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2: // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3: // accept
                return true;
        }

    }

    return true;
}};/* Jison generated lexer */
var lexer = (function(){

var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parseError) {
            this.yy.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext+=ch;
        this.yyleng++;
        this.match+=ch;
        this.matched+=ch;
        var lines = ch.match(/\n/);
        if (lines) this.yylineno++;
        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        this._input = ch + this._input;
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            match = this._input.match(this.rules[rules[i]]);
            if (match) {
                lines = match[0].match(/\n.*/g);
                if (lines) this.yylineno += lines.length;
                this.yylloc = {first_line: this.yylloc.last_line,
                               last_line: this.yylineno+1,
                               first_column: this.yylloc.last_column,
                               last_column: lines ? lines[lines.length-1].length-1 : this.yylloc.last_column + match[0].length}
                this.yytext += match[0];
                this.match += match[0];
                this.matches = match;
                this.yyleng = this.yytext.length;
                this._more = false;
                this._input = this._input.slice(match[0].length);
                this.matched += match[0];
                token = this.performAction.call(this, this.yy, this, rules[i],this.conditionStack[this.conditionStack.length-1]);
                if (token) return token;
                else return;
            }
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(), 
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    }});
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0:/* ignore comment */
break;
case 1:return "INT"; 
break;
case 2:return 5;
break;
case 3:return 12;
break;
case 4:return 14;
break;
case 5:return 21;
break;
case 6:return 28;
break;
case 7:return 29;
break;
case 8:return 30;
break;
case 9:return 32;
break;
case 10:return 31;
break;
case 11:return 27;
break;
case 12:return 26;
break;
case 13:return 16;
break;
case 14:return 25;
break;
case 15:return 24;
break;
case 16:return 22;
break;
case 17:return 36;
break;
case 18:return 41;
break;
case 19:return 33;
break;
case 20:return 34;
break;
case 21:return 35;
break;
case 22:return 37;
break;
case 23:return 39;
break;
case 24:return 38;
break;
case 25:return 40;
break;
case 26:return 6;
break;
case 27:return 9;
break;
case 28:return 19;
break;
case 29:return 20;
break;
case 30:return 18;
break;
case 31:/* skip whitespace */
break;
case 32:throw 'Illegal character';
break;
case 33:return 10;
break;
}
};
lexer.rules = [/^\/\/.*/,/^int\b/,/^main\b/,/^class\b/,/^extends\b/,/^nat\b/,/^if\b/,/^else\b/,/^for\b/,/^printNat\b/,/^readNat\b/,/^this\b/,/^new\b/,/^var\b/,/^null\b/,/^[0-9]+/,/^[a-zA-Z][a-zA-Z0-9]*/,/^==/,/^=/,/^\+/,/^-/,/^\*/,/^>/,/^\|\|/,/^!/,/^\./,/^\{/,/^\}/,/^\(/,/^\)/,/^;/,/^\s+/,/^\./,/^$/];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],"inclusive":true}};return lexer;})()
parser.lexer = lexer;
return parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = classy;
exports.parse = function () { return classy.parse.apply(classy, arguments); }
exports.main = function commonjsMain(args) {
    if (!args[1])
        throw new Error('Usage: '+args[0]+' FILE');
    if (typeof process !== 'undefined') {
        var source = require('fs').readFileSync(require('path').join(process.cwd(), args[1]), "utf8");
    } else {
        var cwd = require("file").path(require("file").cwd());
        var source = cwd.join(args[1]).read({charset: "utf-8"});
    }
    return exports.parser.parse(source);
}
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
}
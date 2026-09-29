// Функция для создания ключевых слов
function caseInsensitive(keyword) {
  return new RegExp(keyword
    .split('')
    .map(letter => `[${letter.toLowerCase()}${letter.toUpperCase()}]`)
    .join('')
  );
}

// Хелперы для ключевых слов
const KW = {
  BEGIN: caseInsensitive('begin'),
  END: caseInsensitive('end'),
  DECLARE: caseInsensitive('declare'),
  DEFAULT: caseInsensitive('default'),
  PROCEDURE: caseInsensitive('procedure'),
  FUNCTION: caseInsensitive('function'),
  TYPE: caseInsensitive('type'),
  SUBTYPE: caseInsensitive('subtype'),
  IS: caseInsensitive('is'),
  IF: caseInsensitive('if'),
  THEN: caseInsensitive('then'),
  ELSE: caseInsensitive('else'),
  ELSIF: caseInsensitive('elsif'),
  LOOP: caseInsensitive('loop'),
  WHILE: caseInsensitive('while'),
  FOR: caseInsensitive('for'),
  IN: caseInsensitive('in'),
  REVERSE: caseInsensitive('reverse'),
  RETURN: caseInsensitive('return'),
  EXIT: caseInsensitive('exit'),
  CONTINUE: caseInsensitive('continue'),
  CASE: caseInsensitive('case'),
  WHEN: caseInsensitive('when'),
  LOCATE: caseInsensitive('locate'),
  EXACT: caseInsensitive('exact'),
  INSERT: caseInsensitive('insert'),
  UPDATE: caseInsensitive('update'),
  DELETE: caseInsensitive('delete'),
  SELECT: caseInsensitive('select'),
  INTO: caseInsensitive('into'),
  FROM: caseInsensitive('from'),
  WHERE: caseInsensitive('where'),
  GROUP: caseInsensitive('group'),
  HAVING: caseInsensitive('having'),
  START: caseInsensitive('start'),
  CONNECT: caseInsensitive('connect'),
  UNION: caseInsensitive('union'),
  INTERSECT: caseInsensitive('intersect'),
  MINUS: caseInsensitive('minus'),
  WITH: caseInsensitive('with'),
  RECURSIVE: caseInsensitive('recursive'),
  AS: caseInsensitive('as'),
  SIBLINGS: caseInsensitive('siblings'),
  JOIN: caseInsensitive('join'),
  LEFT: caseInsensitive('left'),
  RIGHT: caseInsensitive('right'),
  FULL: caseInsensitive('full'),
  INNER: caseInsensitive('inner'),
  OUTER: caseInsensitive('outer'),
  ON: caseInsensitive('on'),
  OFFSET: caseInsensitive('offset'),
  FETCH: caseInsensitive('fetch'),
  ORDER: caseInsensitive('order'),
  BY: caseInsensitive('by'),
  LOCK: caseInsensitive('lock'),
  WAIT: caseInsensitive('wait'),
  NOWAIT: caseInsensitive('nowait'),
  SKIP: caseInsensitive('skip'),
  OF: caseInsensitive('of'),
  PRAGMA: caseInsensitive('pragma'),
  EXCEPTION: caseInsensitive('exception'),
  REF: caseInsensitive('ref'),
  NOSTATIC: caseInsensitive('nostatic'),
  STATIC: caseInsensitive('static'),
  COLLECTIONS: caseInsensitive('collections'),
  ONE_BY_ONE: caseInsensitive('one by one'),
  DISTINCT: caseInsensitive('distinct'),
  SAVEPOINT: caseInsensitive('savepoint'),
  ROLLBACK: caseInsensitive('rollback'),
  COMMIT: caseInsensitive('commit'),
  TO: caseInsensitive('to'),
  ESCAPE: caseInsensitive('escape'),
  RAISE: caseInsensitive('raise'),

  // Types
  VARCHAR: caseInsensitive('varchar'),
  VARCHAR2: caseInsensitive('varchar2'),
  CHAR: caseInsensitive('char'),
  NCHAR: caseInsensitive('nchar'),
  NVARCHAR2: caseInsensitive('nvarchar2'),
  RAW: caseInsensitive('raw'),
  NUMBER: caseInsensitive('number'),
  INTEGER: caseInsensitive('integer'),
  DATE: caseInsensitive('date'),
  STRING: caseInsensitive('string'),
  NSTRING: caseInsensitive('nstring'),
  MEMO: caseInsensitive('memo'),
  NMEMO: caseInsensitive('nmemo'),
  REFERENCE: caseInsensitive('reference'),
  BINARY_FLOAT: caseInsensitive('binary_float'),
  BINARY_DOUBLE: caseInsensitive('binary_double'),
  BOOLEAN: caseInsensitive('boolean'),
  BLOB: caseInsensitive('blob'),
  CLOB: caseInsensitive('clob'),
  NCLOB: caseInsensitive('nclob'),
  BFILE: caseInsensitive('bfile'),
  ROWID: caseInsensitive('rowid'),
  TIMESTAMP: caseInsensitive('timestamp'),
  INTERVAL: caseInsensitive('interval'),

  // Logic & Literals
  OR: caseInsensitive('or'),
  AND: caseInsensitive('and'),
  NOT: caseInsensitive('not'),
  NULL: caseInsensitive('null'),
  TRUE: caseInsensitive('true'),
  FALSE: caseInsensitive('false'),
  OTHERS: caseInsensitive('others'),
  LIKE: caseInsensitive('like'),
  BETWEEN: caseInsensitive('between'),
  EXISTS: caseInsensitive('exists'),
  ANY: caseInsensitive('any'),
  ALL: caseInsensitive('all'),
  MULTISET: caseInsensitive('multiset'),
  SUBMULTISET: caseInsensitive('submultiset'),
  BULK: caseInsensitive('bulk'),
  COLLECT: caseInsensitive('collect'),
  MEMBER: caseInsensitive('member'),
  SET: caseInsensitive('set'),
  EMPTY: caseInsensitive('empty'),
  NAN: caseInsensitive('nan'),
  INFINITE: caseInsensitive('infinite'),
  CAST: caseInsensitive('cast'),
  CURSOR: caseInsensitive('cursor'),
  
  // Extra
  ROWNUM: caseInsensitive('rownum'),
  SYSDATE: caseInsensitive('sysdate'),
  SYSTIMESTAMP: caseInsensitive('systimestamp'),
  SQLERRM: caseInsensitive('sqlerrm'),
  SQLCODE: caseInsensitive('sqlcode'),
  OUT: caseInsensitive('out'),
  RECORD: caseInsensitive('record'),
  TABLE: caseInsensitive('table'),
  VARRAY: caseInsensitive('varray'),
  PUBLIC: caseInsensitive('public'),
  PRIOR: caseInsensitive('prior'),
  VAR: caseInsensitive('var'),
  DETERMINISTIC: caseInsensitive('deterministic'),
  PIPELINED: caseInsensitive('pipelined'),
  NOCOPY: caseInsensitive('nocopy'),
  CONST: caseInsensitive('const'),
  CONSTANT: caseInsensitive('constant'),
  UNCONSTRAINED: caseInsensitive('unconstrained'),
  BYTE: caseInsensitive('byte'),
  CHARACTER: caseInsensitive('character'),
  SET: caseInsensitive('set'),
  RESTRICT_REFERENCES: caseInsensitive('restrict_references'),
  EXCEPTION_INIT: caseInsensitive('exception_init'),
  ASC: caseInsensitive('asc'),
  DESC: caseInsensitive('desc'),
  NULLS: caseInsensitive('nulls'),
  FIRST: caseInsensitive('first'),
  LAST: caseInsensitive('last'),
  
  // Pragmas
  CALCULATE: caseInsensitive('calculate'),
  OPTIMIZE: caseInsensitive('optimize'),
  ARCHIVE: caseInsensitive('archive'),
  MACRO: caseInsensitive('macro'),
  WRITE_LOG: caseInsensitive('write_log'),

  // OOP
  CLASS: caseInsensitive('class'),
  VIEW: caseInsensitive('view'),
  REPORT: caseInsensitive('report'),
  ABSTRACT: caseInsensitive('abstract'),
  VARIANT: caseInsensitive('variant'),
  EXTENDS: caseInsensitive('extends'),
  COLLECTION: caseInsensitive('collection'),
  STANDALONE: caseInsensitive('standalone'),
  NESTED: caseInsensitive('nested'),
  TEMPORARY: caseInsensitive('temporary'),
  PRESERVE: caseInsensitive('preserve'),
  IDENTIFIED: caseInsensitive('identified'),
  METHOD: caseInsensitive('method'),
  ATTRIBUTE: caseInsensitive('attribute'),
  EXECUTE: caseInsensitive('execute'),
  VALIDATE: caseInsensitive('validate'),
  THIS: caseInsensitive('this'),
  CONSTRUCTOR: caseInsensitive('constructor'),
  DESTRUCTOR: caseInsensitive('destructor'),
  LIBRARY: caseInsensitive('library'),
  BATCH: caseInsensitive('batch'),
  USES: caseInsensitive('uses'),
  // `instead of` — один токен, а не два ключевых слова: пара `instead` + `of`
  // в трёх определениях разом переполняла таблицу разбора tree-sitter
  // (66 073 действия при пределе 65 535).
  INSTEAD_OF: /[iI][nN][sS][tT][eE][aA][dD]\s+[oO][fF]/,
  IMMEDIATE: caseInsensitive('immediate'),
  USING: caseInsensitive('using')
};

module.exports = grammar({
  name: 'plplus',
  caseInsensitive: true,
  extras: $ => [
    /\s/,
    $.comment
  ],

  conflicts: $ => [
    [$.method_definition],
    [$.constructor_definition],
    [$.destructor_definition],
    [$.trigger_definition],
    [$.library_definition],
    [$.declarations],
    [$.method_body_declarations],
    [$.variable_declaration, $.variable],
    [$.static_cursor_ref, $.variable],
    [$.table_reference],
    [$.table_reference, $.nested_table_ref],
    [$.join_clause],
    [$.variable],
    [$.decorator_argument, $.variable],
    [$.call_argument, $.variable],
    [$.plplus_exists_select, $.variable],
    [$.insert_statement, $.variable],
    [$.plplus_select_iterator, $.variable],
    [$.pct_id, $.modifier_name],
    [$.pct_type, $.modifier_name],
    [$.pct_rowtype, $.modifier_name],
    [$.pct_rowtable, $.modifier_name],
    [$.variable_declaration, $.var_declaration_statement],
    [$.plplus_select_iterator],
    [$.datatype]
  ],

  rules: {
    source_file: $ => repeat(choice(
      $.class_declaration,
      $.view_definition,
      $.library_definition,
      $.method_definition,
      $.constructor_definition,
      $.destructor_definition,
      $.trigger_definition,
      $.plp_block,
      $.declare_element
    )),

    declarations: $ => repeat1($.declare_element),

    // --- Named Keyword Nodes ---
    kw_class: $ => KW.CLASS,
    kw_view: $ => KW.VIEW,
    kw_report: $ => KW.REPORT,
    kw_constructor: $ => KW.CONSTRUCTOR,
    kw_destructor: $ => KW.DESTRUCTOR,
    kw_abstract: $ => KW.ABSTRACT,
    kw_variant: $ => KW.VARIANT,
    kw_extends: $ => KW.EXTENDS,
    kw_collection: $ => KW.COLLECTION,
    kw_standalone: $ => KW.STANDALONE,
    kw_nested: $ => KW.NESTED,
    kw_temporary: $ => KW.TEMPORARY,
    kw_preserve: $ => KW.PRESERVE,
    kw_identified: $ => KW.IDENTIFIED,
    kw_by: $ => KW.BY,
    kw_method: $ => KW.METHOD,
    kw_attribute: $ => KW.ATTRIBUTE,
    kw_batch: $ => KW.BATCH,
    kw_uses: $ => KW.USES,
    kw_instead_of: $ => KW.INSTEAD_OF,
    kw_execute: $ => KW.EXECUTE,
    kw_immediate: $ => KW.IMMEDIATE,
    kw_using: $ => KW.USING,
    kw_validate: $ => KW.VALIDATE,
    kw_procedure: $ => KW.PROCEDURE,
    kw_function: $ => KW.FUNCTION,
    kw_declare: $ => KW.DECLARE,
    kw_default: $ => KW.DEFAULT,
    kw_type: $ => KW.TYPE,
    kw_subtype: $ => KW.SUBTYPE,
    kw_is: $ => KW.IS,
    kw_begin: $ => KW.BEGIN,
    kw_end: $ => KW.END,
    kw_if: $ => KW.IF,
    kw_then: $ => KW.THEN,
    kw_else: $ => KW.ELSE,
    kw_elsif: $ => KW.ELSIF,
    kw_case: $ => KW.CASE,
    kw_when: $ => KW.WHEN,
    kw_loop: $ => KW.LOOP,
    kw_for: $ => KW.FOR,
    kw_while: $ => KW.WHILE,
    kw_in: $ => prec(1, choice('in', 'IN', 'In', 'iN')),
    kw_return: $ => choice(KW.RETURN, caseInsensitive('returning')),
    kw_exit: $ => KW.EXIT,
    kw_continue: $ => KW.CONTINUE,
    kw_locate: $ => KW.LOCATE,
    kw_pragma: $ => KW.PRAGMA,
    kw_exception: $ => KW.EXCEPTION,
    kw_lock: $ => KW.LOCK,
    kw_wait: $ => KW.WAIT,
    kw_nowait: $ => KW.NOWAIT,
    kw_skip: $ => KW.SKIP,
    kw_where: $ => KW.WHERE,
    kw_order: $ => KW.ORDER,
    kw_by: $ => KW.BY,
    kw_select: $ => KW.SELECT,
    kw_savepoint: $ => KW.SAVEPOINT,
    kw_rollback: $ => KW.ROLLBACK,
    kw_commit: $ => KW.COMMIT,
    kw_to: $ => KW.TO,
    kw_escape: $ => KW.ESCAPE,
    kw_raise: $ => KW.RAISE,
    kw_insert: $ => KW.INSERT,
    kw_update: $ => KW.UPDATE,
    kw_delete: $ => KW.DELETE,
    kw_into: $ => KW.INTO,
    kw_from: $ => KW.FROM,
    kw_of: $ => KW.OF,
    kw_ref: $ => KW.REF,
    kw_this: $ => KW.THIS,
    kw_null: $ => KW.NULL,
    kw_true: $ => KW.TRUE,
    kw_false: $ => KW.FALSE,
    kw_public: $ => KW.PUBLIC,
    kw_others: $ => KW.OTHERS,
    kw_reverse: $ => KW.REVERSE,
    kw_exact: $ => KW.EXACT,
    kw_one_by_one: $ => KW.ONE_BY_ONE,
    kw_nostatic: $ => KW.NOSTATIC,
    kw_static: $ => KW.STATIC,
    kw_collections: $ => KW.COLLECTIONS,
    kw_out: $ => KW.OUT,
    kw_prior: $ => KW.PRIOR,
    kw_var: $ => KW.VAR,
    kw_and: $ => KW.AND,
    kw_or: $ => KW.OR,
    kw_not: $ => KW.NOT,
    kw_like: $ => KW.LIKE,
    kw_between: $ => KW.BETWEEN,
    kw_distinct: $ => KW.DISTINCT,
    kw_all: $ => KW.ALL,
    kw_any: $ => KW.ANY,
    kw_exists: $ => KW.EXISTS,
    kw_multiset: $ => KW.MULTISET,
    kw_cast: $ => KW.CAST,
    kw_cursor: $ => KW.CURSOR,
    kw_with: $ => KW.WITH,
    kw_recursive: $ => KW.RECURSIVE,
    kw_as: $ => KW.AS,
    kw_connect: $ => KW.CONNECT,
    kw_start: $ => KW.START,
    kw_group: $ => KW.GROUP,
    kw_having: $ => KW.HAVING,
    kw_union: $ => KW.UNION,
    kw_intersect: $ => KW.INTERSECT,
    kw_minus: $ => KW.MINUS,
    kw_join: $ => KW.JOIN,
    kw_on: $ => KW.ON,
    kw_offset: $ => KW.OFFSET,
    kw_fetch: $ => KW.FETCH,
    kw_inner: $ => KW.INNER,
    kw_outer: $ => KW.OUTER,
    kw_left: $ => KW.LEFT,
    kw_right: $ => KW.RIGHT,
    kw_full: $ => KW.FULL,
    kw_siblings: $ => KW.SIBLINGS,
    kw_asc: $ => KW.ASC,
    kw_desc: $ => KW.DESC,
    kw_nulls: $ => KW.NULLS,
    kw_first: $ => KW.FIRST,
    kw_last: $ => KW.LAST,
    kw_const: $ => choice(KW.CONST, KW.CONSTANT),
    kw_nocopy: $ => KW.NOCOPY,
    kw_unconstrained: $ => KW.UNCONSTRAINED,
    kw_byte: $ => KW.BYTE,
    kw_character: $ => KW.CHARACTER,
    kw_set: $ => KW.SET,
    kw_restrict_references: $ => KW.RESTRICT_REFERENCES,
    kw_exception_init: $ => KW.EXCEPTION_INIT,
    kw_deterministic: $ => KW.DETERMINISTIC,
    kw_pipelined: $ => KW.PIPELINED,
    kw_calculate: $ => KW.CALCULATE,
    kw_optimize: $ => KW.OPTIMIZE,
    kw_archive: $ => KW.ARCHIVE,
    kw_macro: $ => KW.MACRO,
    kw_write_log: $ => KW.WRITE_LOG,
    kw_library: $ => KW.LIBRARY,
    kw_submultiset: $ => KW.SUBMULTISET,
    kw_bulk: $ => KW.BULK,
    kw_collect: $ => KW.COLLECT,
    kw_member: $ => KW.MEMBER,
    kw_empty: $ => KW.EMPTY,
    kw_nan: $ => KW.NAN,
    kw_infinite: $ => KW.INFINITE,
    kw_rownum: $ => KW.ROWNUM,
    kw_sysdate: $ => KW.SYSDATE,
    kw_systimestamp: $ => KW.SYSTIMESTAMP,
    kw_sqlerrm: $ => KW.SQLERRM,
    kw_sqlcode: $ => KW.SQLCODE,

    kw_varchar: $ => KW.VARCHAR,
    kw_varchar2: $ => KW.VARCHAR2,
    kw_char: $ => KW.CHAR,
    kw_nchar: $ => KW.NCHAR,
    kw_nvarchar2: $ => KW.NVARCHAR2,
    kw_raw: $ => KW.RAW,
    kw_number: $ => KW.NUMBER,
    kw_integer: $ => KW.INTEGER,
    kw_date: $ => KW.DATE,
    kw_string: $ => KW.STRING,
    kw_nstring: $ => KW.NSTRING,
    kw_memo: $ => KW.MEMO,
    kw_nmemo: $ => KW.NMEMO,
    kw_reference: $ => KW.REFERENCE,
    kw_binary_float: $ => KW.BINARY_FLOAT,
    kw_binary_double: $ => KW.BINARY_DOUBLE,
    kw_boolean: $ => KW.BOOLEAN,
    kw_blob: $ => KW.BLOB,
    kw_clob: $ => KW.CLOB,
    kw_nclob: $ => KW.NCLOB,
    kw_bfile: $ => KW.BFILE,
    kw_rowid: $ => KW.ROWID,
    kw_timestamp: $ => KW.TIMESTAMP,
    kw_interval: $ => KW.INTERVAL,
    kw_record: $ => KW.RECORD,
    kw_table: $ => KW.TABLE,
    kw_varray: $ => KW.VARRAY,

    // OOP Rules
    decorator: $ => seq(
      '@',
      field('name', choice($.identifier, $.kw_this, $.kw_class, $.kw_method, $.kw_execute, $.kw_validate)),
      optional(seq('(', optional($.decorator_arguments), ')'))
    ),

    decorator_arguments: $ => seq(
      $.decorator_argument,
      repeat(seq(',', $.decorator_argument))
    ),

    decorator_argument: $ => choice(
      // Именованный параметр: name := value
      seq(choice($.identifier, $.kw_this, $.kw_class), choice(':=', '='), $.expression),
      // Просто значение
      $.expression,
      $.identifier
    ),

    class_declaration: $ => seq(
      repeat($.decorator),
      optional($.kw_abstract),
      // `temporary class X { … }` и `temporary preserve class X { … }` —
      // временный класс, живущий в пределах сеанса.
      optional(seq($.kw_temporary, optional($.kw_preserve))),
      $.kw_class,
      field('name', $.name_or_placeholder),
      // `class X identified by CLS { … }` — колонка-идентификатор экземпляра.
      optional(seq($.kw_identified, $.kw_by, field('identity', $.identifier))),
      choice(
        // Simple class declaration: class NAME;
        ';',
        // Class with extends: class NAME extends PARENT { ... }
        seq(
          $.kw_extends,
          field('parent', $.type_identifier),
          '{',
          repeat($.variable_declaration),
          '}'
        ),
        // Class body without extends: class NAME { fields }
        seq('{', repeat($.variable_declaration), '}'),
        // Variant class declaration: class NAME is variant { members }
        seq(
          $.kw_is,
          $.kw_variant,
          '{',
          repeat($.variant_member),
          '}'
        ),
        // Collection class: class NAME is collection [TYPE];
        // Collection class: class NAME is standalone collection [TYPE];
        // class NAME is [standalone|nested] collection [TYPE];
        seq(
          $.kw_is,
          optional(choice($.kw_standalone, $.kw_nested)),
          $.kw_collection,
          field('element_type', $.class_identifier),
          ';'
        ),
        // Subtype declaration: class NAME is DATATYPE;
        seq(
          $.kw_is,
          field('type', $.datatype),
          ';'
        )
      )
    ),

    variant_member: $ => seq(
      repeat($.decorator),
      field('name', $.identifier),
      field('type', $.class_identifier),
      ';'
    ),

    // View definition (.vw/.vp): view VIEW_NAME { type main is <query>; ... }
    // The body is the usual declare_element set — `type <name> is <select>;`
    // already parses; this rule supplies the missing `view NAME { … }` wrapper.
    view_definition: $ => seq(
      repeat($.decorator),
      optional($.kw_report),
      $.kw_view,
      field('name', $.identifier),
      '{',
      repeat($.declare_element),
      '}'
    ),

    // Library definition: library LIB_NAME is ... end;
    // Trailing `end;` is optional — real PL/Plus corpus contains
    // libraries terminated without an explicit closing `end;`.
    library_definition: $ => seq(
      repeat($.decorator),
      $.kw_library,
      field('name', $.identifier),
      $.kw_is,
      repeat(choice($.declare_element, $.plp_block)),
      optional(seq($.kw_end, ';'))
    ),

    method_definition: $ => seq(
      repeat($.decorator),
      optional($.kw_static),
      optional($.kw_batch),
      $.kw_method,
      field('name', $.name_or_placeholder),
      optional($.parameter_list),
      optional($.return_type),
      optional(seq(choice($.kw_uses, $.kw_instead_of), field('base', $.type_identifier))),
      $.kw_is,
      optional($.method_body_declarations),
      optional($.method_interface),
      optional($.validate_block),
      optional($.execute_block),
      optional(seq($.kw_end, ';')),  // end of method interface body
      optional(seq($.kw_end, ';'))   // end of method definition
    ),

    attribute_definition: $ => seq(
      repeat($.decorator),
      $.kw_attribute,
      field('name', $.name_or_placeholder),
      field('type', $.class_identifier),
      $.kw_is,
      repeat(choice(
        $.attribute_getsql_section,
        $.attribute_get_section,
        $.attribute_set_section,
        $.declare_element,
        $.plp_block
      )),
      $.kw_end, ';'
    ),

    attribute_getsql_section: $ => seq(
      caseInsensitive('getsql'),
      $.kw_is,
      repeat(choice(
        $.attribute_query_type,
        $.pragma_statement,
        $.macro_statement
      )),
      $.kw_end, ';'
    ),

    attribute_query_type: $ => seq(
      $.kw_type,
      $.identifier,
      $.kw_is,
      $.select_statement
    ),

    attribute_get_section: $ => seq(
      caseInsensitive('get'),
      $.kw_is,
      optional($.declarations),
      $.plp_block
    ),

    attribute_set_section: $ => seq(
      caseInsensitive('set'),
      $.kw_is,
      optional($.declarations),
      $.plp_block
    ),

    // Declarations in method body: variables, types, local procs/funcs, and init blocks
    method_body_declarations: $ => repeat1(choice(
      $.declare_element,
      $.plp_block,
      $.class_declaration  // repeated class header (class NAME;) in .plp files
    )),

    constructor_definition: $ => seq(
      repeat($.decorator),
      $.kw_constructor, field('name', $.name_or_placeholder),
      optional(seq(choice($.kw_uses, $.kw_instead_of), field('base', $.type_identifier))),
      $.kw_is,
      optional($.method_body_declarations),  // declarations before method interface (public vars, types, etc.)

      // Constructor body starts with the signature definition
      optional(seq(
        $.method_interface,
        optional($.declarations),
        optional($.validate_block),
        optional($.execute_block),
        optional(seq($.kw_end, ';')) // End of the inner body
      )),

      optional(seq($.kw_end, ';')) // End of the constructor itself
    ),

    destructor_definition: $ => seq(
      repeat($.decorator),
      $.kw_destructor, field('name', $.name_or_placeholder),
      optional(seq(choice($.kw_uses, $.kw_instead_of), field('base', $.type_identifier))),
      $.kw_is,
      optional($.method_body_declarations),  // declarations before method interface

      // Destructor body — same structure as constructor
      optional(seq(
        $.method_interface,
        optional($.declarations),
        optional($.validate_block),
        optional($.execute_block),
        optional(seq($.kw_end, ';')) // End of the inner body
      )),

      optional(seq($.kw_end, ';')) // End of the destructor itself
    ),

    // Trigger definition: trigger NAME is [declarations] NAME(params) is execute is ... end; end; end;
    trigger_definition: $ => seq(
      repeat($.decorator),
      caseInsensitive('trigger'), field('name', $.name_or_placeholder),
      $.kw_is,
      optional($.method_body_declarations),
      optional(seq(
        $.method_interface,
        optional($.declarations),
        optional($.validate_block),
        optional($.execute_block),
        optional(seq($.kw_end, ';'))
      )),
      optional(seq($.kw_end, ';'))
    ),

    // Объявление интерфейса метода внутри тела
    method_interface: $ => seq(
      $.name_or_placeholder, // имя метода (повторяется, может быть плейсхолдером)
      optional($.parameter_list),
      optional($.return_type),
      $.kw_is
    ),

    validate_block: $ => seq(
       $.kw_validate, $.kw_is,
       optional($.declarations),
       $.plp_block
    ),

    execute_block: $ => seq(
       $.kw_execute, $.kw_is,
       optional($.declarations),
       choice(
         $.plp_block,
         seq(repeat1($.inline_block_statement), $.kw_end, ';')
       )
    ),

    declare_element: $ => choice(
      $.attribute_definition,
      $.variable_declaration,
      $.type_declaration,
      $.subtype_declaration,
      $.procedure_declaration,
      $.function_declaration,
      $.pragma_statement,
      $.plsql_injection,
      $.exception_declaration,
      $.macro_expansion  // Macro in declaration context (e.g. &Var_Sum_Dog)
    ),

    exception_declaration: $ => seq(
      optional($.kw_public),
      field('name', $.identifier),
      $.kw_exception,
      ';'
    ),

    subtype_declaration: $ => seq(
      optional(prec(1, $.kw_public)),
      $.kw_subtype,
      field('name', $.identifier),
      $.kw_is,
      choice(
        seq($.kw_table, $.kw_of, $.datatype, optional(seq(caseInsensitive('index'), $.kw_by, $.datatype))),
        seq($.kw_varray, '(', $.number, ')', $.kw_of, $.datatype),
        $.datatype,
        $.expression
      ),
      ';'
    ),

    // Macro expansion - used in declarations (no semicolon needed)
    macro_substitution: $ => prec.right(15, seq('&', $.macro_name, optional($.macro_arguments))),
    macro_name: $ => token(prec(-1, /[a-zA-Z_Ѐ-ӿ][a-zA-Z0-9_#$Ѐ-ӿ]*(\.[a-zA-Z_Ѐ-ӿ][a-zA-Z0-9_#$Ѐ-ӿ]*)*/)),
    macro_arguments: $ => seq(
      '(',
      repeat(seq(optional($.expression), choice(',', ';'))),
      optional($.expression),
      ')'
    ),
    macro_expansion: $ => seq($.macro_substitution, optional(';')),

    identifier: $ => token(prec(-1, /[a-zA-Z_Ѐ-ӿ][a-zA-Z0-9_#$Ѐ-ӿ]*/)),
    quoted_identifier: $ => token(prec(-1, /"([^"]|"")*"/)),
    class_identifier: $ => prec(2, seq('[', optional(choice($.identifier, $.number)), ']')),
    type_identifier: $ => prec(2, seq(
      optional('::'),
      choice($.identifier, $.class_identifier, $.quoted_identifier, $.kw_const),  // kw_const: Oracle CONSTANT package, quoted: "CONSTANT"
      repeat(seq(choice('.', '::'), choice($.identifier, $.class_identifier, $.quoted_identifier)))
    )),
    // Плейсхолдер - может быть обычный identifier или [PLACEHOLDER]
    name_or_placeholder: $ => choice($.identifier, $.class_identifier),

    number: $ => /\d+(\.\d+)?([eE][+-]?\d+)?[dDfF]?/, 
    string: $ => /\'([^']|'')*'/, 

    comment: $ => choice(
      /--.*/,
      /\/\*([^*]|\*+[^/*])*\*+\//
    ),

    datatype: $ => choice(
      prec(2, $.macro_substitution),
      $.kw_integer, $.kw_date, $.kw_boolean,
      seq(choice($.kw_memo, $.kw_nmemo), optional(seq('(', $.number, ')'))),
      $.kw_reference, $.kw_binary_float, $.kw_binary_double,
      $.kw_blob, $.kw_clob, $.kw_nclob, $.kw_bfile, $.kw_rowid,
      prec(3, seq($.kw_timestamp, optional(seq('(', $.number, ')')))),
      prec(3, seq($.kw_interval, choice(
        seq(caseInsensitive('day'), optional(seq('(', $.number, ')')), $.kw_to, caseInsensitive('second'), optional(seq('(', $.number, ')'))),
        seq(caseInsensitive('year'), optional(seq('(', $.number, ')')), $.kw_to, caseInsensitive('month')),
        optional(seq('(', $.number, optional(seq(',', $.number)), ')'))
      ))),
      // Oracle типы с размером: varchar2(size), char(size), string(size), number(p,s)
      // Размер опционален: varchar2 или varchar2(32000); может быть макросом —
      // varchar2(&BUF_SIZE), raw(&BUF_SIZE) после pragma macro(BUF_SIZE, 5120)
      prec(3, seq(choice($.kw_varchar, $.kw_varchar2, $.kw_char, $.kw_nchar, $.kw_nvarchar2, $.kw_raw,
                 $.kw_string, $.kw_nstring),
          optional(seq('(', choice($.number, $.macro_substitution), optional(choice($.kw_byte, $.kw_char)), ')')))),
      prec(3, seq($.kw_number, optional(seq('(', choice($.number, $.macro_substitution),
          optional(seq(',', choice($.number, $.macro_substitution))), ')')))),
      $.type_identifier,
      seq($.kw_ref, $.type_identifier),
      // %type/%rowtype/%rowtable for qualified type paths.
      // Use type_identifier (not variable) to avoid conflicts with expression modifiers like x%count.
      // %type anchored on an indexed collection element: tab(i)%type or tab(i).val%type
      seq($.type_identifier, '(', $.expression, ')', repeat(seq('.', $.identifier)), $.pct_type),
      seq($.type_identifier, $.pct_type),
      seq($.type_identifier, $.pct_rowtype),
      seq($.type_identifier, $.pct_rowtable),
      // %id%type: [CLASS]%id%type - ID-column type of a class
      seq($.type_identifier, $.pct_id, $.pct_type),
      // %rowtype.field%type: classes%rowtype.id%type - field type from rowtype
      seq($.type_identifier, $.pct_rowtype, '.', $.identifier, $.pct_type),
      // [CLASS]%collection%type, [CLASS]%field%type - modifier-based type derivation
      seq($.type_identifier, '%', $.modifier_name, $.pct_type),
      // [CLASS]%collection - standalone modifier as type (e.g. parameter type)
      seq($.type_identifier, '%', $.modifier_name)
    ),

    // Case-insensitive %type, %rowtype, %rowtable, %id tokens
    pct_type: $ => token(seq('%', caseInsensitive('type'))),
    pct_rowtype: $ => token(seq('%', caseInsensitive('rowtype'))),
    pct_rowtable: $ => token(seq('%', caseInsensitive('rowtable'))),
    pct_id: $ => token(seq('%', caseInsensitive('id'))),
    // `%rowid` отдельным токеном: `rowid` — ключевое слово типа (kw_rowid),
    // и в modifier_name его не положить; а `x%rowid` в select/where — живой
    // код (Rec%rowid : C_RID, where Rec%rowid = …).
    pct_rowid: $ => token(seq('%', caseInsensitive('rowid'))),

    variable_declaration: $ => seq(
      repeat($.decorator),
      optional($.kw_public),
      optional($.kw_var),  // Support for 'var Name Type;' syntax
      field('name', choice($.identifier, $.number)),
      optional($.kw_const),
      optional(choice($.kw_in, $.kw_out, seq($.kw_in, $.kw_out))),
      optional($.kw_nocopy),
      choice(
        field('type', $.datatype),
        seq($.kw_table, $.kw_of, field('type', $.datatype)),  // table of TYPE
        seq($.kw_varray, '(', $.number, ')', $.kw_of, field('type', $.datatype))  // varray(N) of TYPE
      ),
      optional($.kw_unconstrained),
      optional(seq($.kw_not, $.kw_null)),  // NOT NULL constraint on field/variable
      optional(seq(choice(':=', $.kw_default), $.expression)),
      ';'
    ),

    // Record field declaration (no semicolon, used inside record(...))
    record_field: $ => seq(
      field('name', $.identifier),
      optional(choice($.kw_in, $.kw_out, seq($.kw_in, $.kw_out))),
      field('type', $.datatype),
      optional(seq($.kw_not, $.kw_null)),
      optional(seq(choice(':=', $.kw_default), $.expression))
    ),

    type_declaration: $ => seq(
      optional(prec(1, $.kw_public)),
      $.kw_type,
      field('name', $.identifier),
      $.kw_is,
      choice(
        $.datatype,
        seq($.kw_ref, $.kw_cursor, optional(seq($.kw_return, $.datatype))),
        $.select_syntax, // Type as static cursor
        $.plplus_cursor_query, // PL/Plus cursor type with optional UNION/UNION ALL/INTERSECT/MINUS
        seq($.kw_record, '(', sep1($.record_field, ','), ')'),
        seq($.kw_table, $.kw_of, $.datatype, optional(seq(caseInsensitive('index'), $.kw_by, $.datatype))), // Index by: table of TYPE index by STRING/BINARY_INTEGER
        seq($.kw_varray, '(', $.number, ')', $.kw_of, $.datatype)
      ),
      ';'
    ),

    // Compound PL/Plus cursor query: one or more plplus_cursor_type joined by UNION [ALL] / INTERSECT / MINUS
    plplus_cursor_query: $ => seq(
      $.plplus_cursor_type,
      repeat(seq(
        choice(seq($.kw_union, $.kw_all), $.kw_union, $.kw_intersect, $.kw_minus),
        $.plplus_cursor_type
      ))
    ),

    // PL/Plus cursor type for type declarations: select [distinct] x(fields) in collection where ...
    plplus_cursor_type: $ => prec(2, seq(
      $.kw_select, optional($.kw_distinct),
      $.identifier,  // alias
      '(',
      optional(sep1($.plplus_cursor_field, ',')),
      ')',
      $.kw_in,
      $.plplus_cursor_source,
      repeat(choice(
        $.plplus_cursor_join_clause,
        seq(',', $.plplus_cursor_source)
      )),
      optional(choice($.kw_all, $.kw_nostatic, $.kw_collections)),
      optional($.where_clause),
      optional($.connect_clause),
      optional($.group_clause),
      optional($.order_clause),
      optional(seq($.kw_others, $.expression))
    )),

    // Field in cursor type: expr : alias, expr alias (space-separated, no colon — the
    // common form in real .vw/.vp files), or just expr.
    plplus_cursor_field: $ => choice(
      seq(optional($.kw_distinct), $.expression, ':', choice($.identifier, $.quoted_identifier, $.class_identifier)),
      seq(optional($.kw_distinct), $.expression, choice($.identifier, $.quoted_identifier, $.class_identifier)),
      seq($.kw_distinct, $.expression),
      $.expression
    ),

    // Source in cursor type: variable or (variable all : alias) or (variable all alias)
    plplus_cursor_source: $ => choice(
      $.variable,
      seq('(', $.variable, optional(choice($.kw_all, $.kw_collections)), optional($.kw_nostatic),
          optional(choice(seq(':', $.identifier), $.identifier)), ')'),
      seq('(', $.plplus_subquery, ')')
    ),

    plplus_cursor_join_clause: $ => seq(
      optional(choice($.kw_inner, seq(choice($.kw_left, $.kw_right, $.kw_full), optional($.kw_outer)))),
      $.kw_join,
      $.plplus_cursor_source,
      optional($.on_clause)
    ),

    procedure_declaration: $ => seq(
      optional(prec(1, $.kw_public)),
      $.kw_procedure,
      field('name', $.identifier),
      optional($.parameter_list),
      choice(
        ';', // Forward declaration
        seq(
          choice($.kw_is, $.kw_as),
          optional($.declarations),
          $.kw_begin,
          optional($.seq_of_statements),
          optional($.exception_block),
          $.kw_end,
          ';'
        )
      )
    ),

    // Return type: datatype | table of datatype | varray(N) of datatype
    return_type: $ => seq($.kw_return, choice(
      seq($.kw_table, $.kw_of, $.datatype),
      seq($.kw_varray, '(', $.number, ')', $.kw_of, $.datatype),
      $.datatype
    )),

    function_declaration: $ => seq(
      optional(prec(1, $.kw_public)),
      $.kw_function,
      field('name', $.identifier),
      optional($.parameter_list),
      optional($.return_type),
      optional($.kw_deterministic),
      optional($.kw_pipelined),
      choice(
        ';', // Forward declaration
        seq(
          choice($.kw_is, $.kw_as),
          optional($.declarations),
          $.kw_begin,
          optional($.seq_of_statements),
          optional($.exception_block),
          $.kw_end,
          ';'
        )
      )
    ),

    parameter_list: $ => seq('(', optional(sep1($.parameter, ',')), ')'),
    parameter: $ => seq(
        repeat($.decorator),
        $.identifier,
        optional(choice($.kw_in, $.kw_out, seq($.kw_in, $.kw_out))),
        optional($.kw_nocopy),
        choice(
          $.datatype,
          seq($.kw_table, $.kw_of, $.datatype),
          seq($.kw_varray, '(', $.number, ')', $.kw_of, $.datatype)
        ),
        optional(seq($.kw_character, $.kw_set, $.identifier)),  // CHARACTER SET ANY_CS
        optional(seq(choice(':=', $.kw_default), $.expression))
    ),

    seq_of_statements: $ => repeat1($.statement),

    inline_block_statement: $ => choice(
      $.assignment_statement,
      $.if_statement,
      $.loop_statement,
      $.case_statement,
      $.return_statement,
      $.select_statement,
      $.locate_statement,
      $.update_statement,
      $.insert_statement,
      $.delete_statement,
      $.cursor_open_statement,
      $.proc_call_statement,
      $.exit_statement,
      $.continue_statement,
      $.savepoint_statement,
      $.rollback_statement,
      $.commit_statement,
      $.null_statement,
      $.macro_statement,
      $.raise_statement,
      $.execute_immediate_statement
    ),

    statement: $ => choice(
      $.assignment_statement,
      $.if_statement,
      $.loop_statement,
      $.case_statement,
      $.return_statement,
      $.plp_block,
      $.select_statement,
      $.locate_statement,
      $.update_statement,
      $.insert_statement,
      $.delete_statement,
      $.cursor_open_statement,
      $.proc_call_statement,
      $.pragma_statement,
      $.exit_statement,
      $.continue_statement,
      $.savepoint_statement,
      $.rollback_statement,
      $.commit_statement,
      $.null_statement,
      $.macro_statement,
      $.variable_declaration,
      $.var_declaration_statement,
      $.raise_statement,
      $.execute_immediate_statement
    ),

    savepoint_statement: $ => seq($.kw_savepoint, $.identifier, ';'),
    rollback_statement: $ => seq($.kw_rollback, optional(seq($.kw_to, $.identifier)), ';'),
    commit_statement: $ => seq($.kw_commit, ';'),

    plp_block: $ => choice(
      // begin ... end;
      seq(
        $.kw_begin,
        optional($.seq_of_statements),
        optional($.exception_block),
        $.kw_end,
        ';'
      ),
      // declare ... begin ... end;
      seq(
        $.kw_declare,
        optional($.declarations),
        $.kw_begin,
        optional($.seq_of_statements),
        optional($.exception_block),
        $.kw_end,
        ';'
      )
    ),

    // --- Extended SQL Rules ---

    select_statement: $ => choice(
      // Standard SELECT ... INTO
      seq(
        $.select_syntax,
        optional(choice(
          seq($.kw_into, sep1($.variable, ',')),
          seq($.kw_bulk, $.kw_collect, $.kw_into, sep1($.variable, ','))
        )),
        ';'
      ),
      // PL/Plus query union with optional order/fetch/into
      seq(
        $.plplus_query_union,
        optional($.order_clause),
        optional($.fetch_clause),
        optional(choice(
          seq($.kw_into, sep1($.variable, ',')),
          seq($.kw_bulk, $.kw_collect, $.kw_into, sep1($.variable, ','))
        )),
        ';'
      ),
      // PL/Plus collection iterator SELECT: select alias(fields) in collection where ... into var
      $.plplus_collection_select
    ),

    // PL/Plus SELECT для итерации по коллекциям: select t(t) in collection [join ...] where ... into var;
    plplus_collection_select: $ => prec(3, seq(
      $.kw_select, optional($.kw_distinct),
      $.identifier,  // alias
      '(',
      optional(sep1($.plplus_field_mapping, ',')),
      ')',
      $.kw_in,
      $.plplus_iterator_source,  // primary source
      repeat(choice(
        $.plplus_join_clause,                    // join (::[CLASS] all : alias) on condition
        seq(',', $.plplus_iterator_source)       // comma-join: , (::[CLASS] all : alias)
      )),
      optional(choice($.kw_all, $.kw_collections)), optional($.kw_nostatic),
      optional($.where_clause),
      optional($.connect_clause),
      optional($.group_clause),
      optional($.order_clause),
      optional(seq($.kw_fetch, $.expression)),
      $.kw_into,
      sep1($.variable, ','),
      ';'
    )),

    // JOIN clause for PL/Plus collection selects: join (source) on condition
    plplus_join_clause: $ => seq(
      optional(choice($.kw_inner, seq(choice($.kw_left, $.kw_right, $.kw_full), optional($.kw_outer)))),
      $.kw_join,
      $.plplus_iterator_source,
      optional($.on_clause)
    ),

    select_syntax: $ => seq(
       optional($.with_clause),
       $.query,
       optional($.order_clause),
       optional($.lock_clause),
       optional(seq($.kw_others, $.expression))
    ),

    with_clause: $ => seq(
        $.kw_with, optional($.kw_recursive),
        sep1(seq($.identifier, optional(seq('(', sep1($.identifier, ','), ')')), $.kw_as, '(', $.query, ')'), ',')
    ),

    query: $ => choice(
        $.simple_query,
        prec.left(1, seq($.query, choice($.kw_union, seq($.kw_union, $.kw_all), $.kw_intersect, $.kw_minus), $.query)),
        seq('(', $.query, ')')
    ),

    simple_query: $ => seq(
        $.kw_select, optional($.kw_distinct),
        $.select_list,
        choice($.kw_in, $.kw_from),
        $.from_list,
        optional(choice($.kw_all, $.kw_collections)), optional($.kw_nostatic),
        optional($.where_clause),
        optional($.connect_clause),
        optional($.group_clause),
        optional($.offset_clause)
    ),

    select_list: $ => sep1($.select_expression, ','),
    
    select_expression: $ => seq(
        choice($.expression, seq($.kw_cursor, '(', choice($.identifier, $.query), ')'), $.cast_expression),
        optional(seq(':', $.identifier)) // Alias mandatory colon
    ),

    cast_expression: $ => seq($.kw_cast, '(', optional($.kw_cursor), '(', $.query, ')', ',', $.datatype, ')'),

    from_list: $ => seq($.table_reference, repeat(seq(',', $.table_reference))),

    table_reference: $ => prec(1, seq(
        choice(
            seq($.variable, optional(seq('(', choice($.number, $.kw_all), ')'))), // Type/Collection
            $.nested_table_ref,
            $.static_cursor_ref,
            $.subquery_ref
        ),
        optional(choice($.kw_all, $.kw_collections)), optional($.kw_nostatic),
        optional(seq(optional(':'), $.identifier)), // Alias
        repeat($.join_clause)
    )),

    nested_table_ref: $ => seq($.variable), // Simplified for grammar
    static_cursor_ref: $ => seq($.identifier),
    subquery_ref: $ => seq('(', $.select_syntax, ')'),

    join_clause: $ => choice(
        seq(optional($.kw_inner), $.kw_join, $.table_reference, optional($.on_clause)),
        seq(choice($.kw_left, $.kw_right, $.kw_full), optional($.kw_outer), $.kw_join, $.table_reference, $.on_clause)
    ),

    on_clause: $ => seq($.kw_on, $.expression),
    where_clause: $ => seq($.kw_where, $.expression),
    
    connect_clause: $ => seq($.kw_connect, optional(caseInsensitive('nocycle')), $.kw_by, $.expression, optional(seq($.kw_start, $.expression))), 
    
    // GROUP BY [HAVING] or a standalone HAVING with no GROUP BY (valid — treats the
    // whole result set as one group).
    group_clause: $ => choice(
      seq($.kw_group, $.kw_by, sep1($.expression, ','), optional(seq($.kw_having, $.expression))),
      seq($.kw_having, $.expression)
    ),
    
    order_clause: $ => seq($.kw_order, optional($.kw_siblings), $.kw_by, sep1($.order_element, ',')),
    order_element: $ => seq($.expression, optional(choice($.kw_asc, $.kw_desc)), optional(seq($.kw_nulls, choice($.kw_first, $.kw_last)))),

    offset_clause: $ => seq(
        choice(
            seq($.kw_offset, $.number),
            seq($.kw_offset, $.kw_on, $.expression)
        ),
        optional(seq($.kw_fetch, $.expression))
    ),

    // fetch_clause: standalone fetch N or full offset+fetch combination
    fetch_clause: $ => choice(
      $.offset_clause,                       // offset M [fetch N]
      seq($.kw_fetch, $.expression)          // standalone fetch N (without offset)
    ),

    lock_clause: $ => seq($.kw_lock, optional(choice(seq($.kw_wait, $.number), $.kw_nowait, $.kw_skip))),

    // --- End SQL ---

    assignment_statement: $ => seq(
      repeat(seq($.variable, '=')),
      $.variable, ':=', $.expression, ';'
    ),

    if_statement: $ => seq(
      $.kw_if, $.expression, $.kw_then,
      $.seq_of_statements,
      repeat(seq($.kw_elsif, $.expression, $.kw_then, $.seq_of_statements)),
      optional(seq($.kw_else, $.seq_of_statements)),
      $.kw_end, $.kw_if, ';'
    ),

    case_statement: $ => seq(
      $.kw_case,
      optional($.expression),
      optional($.kw_of), // Added OF for case
      repeat1(choice(
        seq($.kw_when, $.expression, $.kw_then, $.seq_of_statements),
        // PL/Plus label form: : expr1, expr2 : statements
        seq(':', sep1($.expression, ','), ':', $.seq_of_statements)
      )),
      optional(seq($.kw_else, $.seq_of_statements)),
      $.kw_end, ';' // Removed kw_case requirement to be safe, doc says 'end;'
    ),

    loop_statement: $ => choice(
      seq($.kw_loop, $.seq_of_statements, $.kw_end, $.kw_loop, ';'),
      seq($.kw_while, $.expression, $.kw_loop, $.seq_of_statements, $.kw_end, $.kw_loop, ';'),
      $.iterator_statement,
      seq($.kw_for, $.expression, $.kw_loop, $.seq_of_statements, $.kw_end, $.kw_loop, ';'),
      seq($.kw_for, $.identifier, $.kw_in, optional($.kw_reverse), $.expression, '..', $.expression, optional($.where_clause),
          $.kw_loop, $.seq_of_statements, $.kw_end, $.kw_loop, ';')
    ),

    iterator_statement: $ => choice(
      // Special PL/Plus SELECT iterator syntax
      prec(2, seq(
        $.kw_for, '(', $.plplus_query_union, ')',
        $.kw_loop,
        $.seq_of_statements,
        $.kw_end, $.kw_loop, ';'
      )),
      // Standard iterator
      prec(1, seq(
        $.kw_for,
        $.identifier, $.kw_in, optional(seq($.kw_var, $.identifier)), optional($.kw_cursor), $.variable,
        optional(choice($.kw_all, $.kw_nostatic, $.kw_collections)), optional($.kw_distinct),
        optional($.where_clause), optional($.order_clause), optional($.lock_clause), optional($.kw_one_by_one),
        optional(seq($.kw_fetch, $.expression)),
        $.kw_loop,
        $.seq_of_statements,
        $.kw_end, $.kw_loop, ';'
      ))
    ),

    // PL/Plus специальный синтаксис SELECT для циклов
    plplus_select_iterator: $ => seq(
      $.kw_select, optional($.kw_distinct),
      // Итератор с полями: x(x) или x(x:ID, x.field:alias)
      $.identifier, '(', optional(sep1($.plplus_field_mapping, ',')), ')',
      // Источники данных
      $.kw_in, $.plplus_iterator_source,
      repeat(choice(
        $.plplus_join_clause,                    // join (::[CLASS] all : alias) on condition
        seq(',', $.plplus_iterator_source)       // comma-join: , (::[CLASS] all : alias)
      )),
      // Опциональный all/nostatic после всех источников
      optional(choice($.kw_all, $.kw_nostatic, $.kw_collections)),
      // Опциональные условия
      optional($.where_clause),
      optional($.connect_clause),
      optional($.group_clause),
      optional($.order_clause),
      optional(seq($.kw_fetch, $.expression))  // fetch N — ограничение количества записей
    ),

    // Маппинг полей в SELECT итераторе: x, x:alias, expr, expr:alias, distinct expr:alias, expr alias (space)
    plplus_field_mapping: $ => choice(
      seq(optional($.kw_distinct), $.expression, ':', choice($.identifier, $.quoted_identifier, $.class_identifier)),  // [distinct] expr:alias
      seq(optional($.kw_distinct), $.expression, choice($.identifier, $.quoted_identifier, $.class_identifier)),       // [distinct] expr alias (space-separated)
      seq($.kw_distinct, $.expression),  // distinct expr
      $.expression                       // expr (includes identifier, variable, function calls etc.)
    ),

    // Источник данных: ::[BRANCH] или (::[KOR_REL] all : y) или (with recursive ... select ... in ...)
    plplus_iterator_source: $ => choice(
      $.variable,  // ::[BRANCH] или обычная переменная
      seq('(', $.variable, optional(choice($.kw_all, $.kw_collections)), optional($.kw_nostatic),
          optional(choice(seq(':', $.identifier), $.identifier)), ')'),  // (::[KOR_REL] all : y) or (::[AC_FIN] all acf)
      seq('(', $.plplus_subquery, ')')  // (with recursive ... select ... in ...)
    ),

    // PL/Plus sub-query: optional WITH clause followed by PL/Plus SELECT (with optional UNION)
    plplus_subquery: $ => seq(
      optional($.plplus_with_clause),
      $.plplus_query_union
    ),

    // PL/Plus WITH RECURSIVE clause with PL/Plus-style selects inside CTE body
    plplus_with_clause: $ => seq(
      $.kw_with, optional($.kw_recursive),
      sep1(seq(
        $.identifier,
        optional(seq('(', sep1($.identifier, ','), ')')),
        $.kw_as,
        '(', $.plplus_query_union, ')'
      ), ',')
    ),

    // Union of PL/Plus SELECT iterators (for CTE body: select ... union all select ...)
    plplus_query_union: $ => choice(
      $.plplus_select_iterator,
      prec.left(1, seq($.plplus_query_union, choice($.kw_union, seq($.kw_union, $.kw_all), $.kw_intersect, $.kw_minus), $.plplus_query_union))
    ),

    locate_statement: $ => seq(
      $.kw_locate, optional($.kw_exact), $.variable, $.kw_in, $.variable,
      optional(choice($.kw_all, $.kw_collections)), optional($.kw_nostatic),
      optional($.where_clause),
      optional($.group_clause),
      optional($.order_clause),
      optional($.fetch_clause),  // fetch N or offset M fetch N
      optional($.lock_clause),
      ';'
    ),

    // cursor%open(select ... union all ... order by ...);
    cursor_open_statement: $ => prec(2, seq(
      $.variable, '%', caseInsensitive('open'), '(',
      $.plplus_query_union,
      optional($.order_clause),
      ')',
      ';'
    )),

    update_statement: $ => seq(
      $.kw_update, optional($.internal_loop), $.identifier, '(', 
      sep1(choice($.assignment_expression, seq('(', sep1($.variable, ','), ')', '=', '(', $.select_syntax, ')')), ','), 
      ')',
      $.kw_in, $.variable, optional(choice($.kw_all, $.kw_collections)), optional($.kw_nostatic),
      optional($.where_clause), 
      optional(seq($.kw_return, $.expression_list, $.kw_into, sep1($.variable, ','))),
      ';'
    ),
    
    insert_statement: $ => seq(
      $.kw_insert, optional($.kw_into),
      optional($.variable), // optional type/collection for simple insert
      optional(choice($.kw_all, $.kw_collections)), optional($.kw_nostatic),
      optional($.internal_loop),
      choice(
         seq($.identifier, '(', sep1($.assignment_expression, ','), ')', optional($.where_clause)), // SQL-like insert
         seq($.variable, $.kw_into, $.variable), // Simple insert: insert var into col
         seq($.variable, $.kw_into, $.variable) // Ambiguous, logic handled by order
      ),
      optional(seq($.kw_return, $.expression_list, $.kw_into, sep1($.variable, ','))),
      ';'
    ),
    
    delete_statement: $ => seq(
        $.kw_delete, optional($.internal_loop), $.identifier, $.kw_in, $.variable, 
        optional(choice($.kw_all, $.kw_collections)), optional($.kw_nostatic),
        optional($.where_clause), 
        optional(seq($.kw_return, $.expression_list, $.kw_into, sep1($.variable, ','))),
        ';'
    ),

    internal_loop: $ => seq($.kw_for, $.identifier,
       choice(
           seq($.kw_in, $.expression, '..', $.expression),
           seq($.kw_in, $.variable),
           seq('index', $.variable)
       ),
       optional(choice(
         seq($.kw_loop, $.kw_exception, $.kw_loop),  // "loop exception loop"
         seq($.kw_loop, $.kw_exception),              // "loop exception"
         $.kw_loop                                    // "loop" (for update/insert/delete for ... loop x(...))
       ))
    ),

    return_statement: $ => seq($.kw_return, optional($.expression), ';'),
    exit_statement: $ => seq($.kw_exit, optional($.identifier), optional(seq($.kw_when, $.expression)), ';'),
    continue_statement: $ => seq($.kw_continue, optional(seq($.kw_when, $.expression)), ';'),
    null_statement: $ => seq($.kw_null, ';'),
    raise_statement: $ => seq($.kw_raise, optional($.expression), ';'),

    // EXECUTE IMMEDIATE expr [INTO var_list] [USING [IN|OUT|IN OUT] expr, ...]
    execute_immediate_statement: $ => seq(
      $.kw_execute, $.kw_immediate, $.expression,
      optional(seq($.kw_into, sep1($.variable, ','))),
      optional(seq($.kw_using, sep1(
        seq(optional(choice(seq($.kw_in, $.kw_out), $.kw_in, $.kw_out)), $.expression),
        ','
      ))),
      ';'
    ),

    // Macro as standalone statement (e.g. &Cash_Depn(this) without semicolon)
    macro_statement: $ => prec(1, seq($.macro_substitution, optional(';'))),

    // Inline variable declaration: var Name Type := value;
    var_declaration_statement: $ => seq(
      $.kw_var,
      field('name', $.identifier),
      field('type', $.datatype),
      optional(seq(':=', $.expression)),
      ';'
    ),
    
    pragma_name: $ => choice($.identifier, $.kw_macro, $.kw_calculate, $.kw_optimize, $.kw_archive, $.kw_write_log, $.kw_restrict_references, $.kw_exception_init),
    pragma_statement: $ => seq(optional($.kw_public), $.kw_pragma, $.pragma_name, optional(seq('(', sep1($.expression, ','), ')')), ';'),

    // Вызов процедуры как statement: proc(); или obj.method(args);
    proc_call_statement: $ => seq($.variable, optional(seq('(', optional($.expression_list), ')')), ';'),


    expression: $ => choice(
      $.binary_expression, $.unary_expression, $.between_expression, $.in_expression,
      $.is_expression, $.case_expression, $.exists_expression, $.multiset_expression,
      $.collection_constructor,
      seq('(', $.plplus_subquery, ')'),
      $.function_call_expression, $.variable, $.literal, $.postfix_field_access,
      seq('(', $.expression, ')')
    ),

    // Anonymous collection constructor: table of TYPE(expr_list)
    collection_constructor: $ => prec(16, seq(
      $.kw_table, $.kw_of, $.datatype, '(', optional($.expression_list), ')'
    )),

    function_call_expression: $ => prec(15, seq($.variable, '(', optional($.expression_list), ')')),

    // Доступ к полю после вызова функции: (expr).[FIELD], func()[FIELD], func().field
    postfix_field_access: $ => prec.left(16, seq(
      choice(
        seq('(', $.expression, ')'),
        $.function_call_expression
      ),
      optional('.'),
      choice($.identifier, $.class_identifier)
    )),

    between_expression: $ => prec.left(3, seq($.expression, optional($.kw_not), $.kw_between, $.expression, $.kw_and, $.expression)),

    in_expression: $ => choice(
      // plplus_subquery covers plain plplus_query_union too (its with-clause is optional),
      // so this also matches `in (with recursive r(...) as (select ... in ...) select ... in r)`.
      prec.left(3, seq($.expression, optional($.kw_not), $.kw_in, '(', choice($.select_syntax, $.plplus_select_iterator, $.plplus_subquery, $.expression_list), ')')),
      // Tuple IN: (a, b, c) [not] in (subquery)
      prec.left(3, seq('(', sep1($.expression, ','), ')', optional($.kw_not), $.kw_in, '(', choice($.select_syntax, $.plplus_select_iterator, $.plplus_subquery, $.expression_list), ')'))
    ),

    is_expression: $ => prec.left(3, seq($.expression, $.kw_is, optional($.kw_not), 
       choice($.kw_null, $.kw_nan, $.kw_infinite, $.kw_empty, seq($.kw_set, $.variable), seq($.kw_member, $.kw_of, $.expression), seq($.kw_submultiset, $.kw_of, $.expression))
    )),
    
    exists_expression: $ => seq($.kw_exists, '(', choice($.select_syntax, $.plplus_exists_select), ')'),

    // PL/Plus collection select inside EXISTS: select x(x) in collection[, (collection all : alias)] [all] where ...
    plplus_exists_select: $ => seq(
      $.kw_select, optional($.kw_distinct),
      $.identifier,  // alias
      '(',
      optional(sep1($.plplus_field_mapping, ',')),
      ')',
      $.kw_in,
      $.plplus_iterator_source,
      repeat(choice(
        $.plplus_join_clause,
        seq(',', $.plplus_iterator_source)
      )),
      optional(choice($.kw_all, $.kw_collections)), optional($.kw_nostatic),
      optional($.where_clause),
      optional($.connect_clause),
      optional($.group_clause) // includes optional HAVING
    ),
    
    multiset_expression: $ => prec.left(5, seq($.expression, $.kw_multiset, choice($.kw_union, $.kw_intersect, $.kw_minus), optional(choice($.kw_all, $.kw_distinct)), $.expression)),

    case_expression: $ => seq($.kw_case, optional($.expression), 
        repeat1(seq($.kw_when, $.expression, $.kw_then, $.expression)),
        optional(seq($.kw_else, $.expression)),
        $.kw_end
    ),

    binary_expression: $ => choice(
      prec.left(1, seq($.expression, $.kw_or, $.expression)),
      prec.left(2, seq($.expression, $.kw_and, $.expression)),
      prec.left(3, seq($.expression, choice('=', '!=', '<>', '>', '<', '>=', '<=', '=='), choice($.expression, seq(choice($.kw_any, $.kw_all), '(', $.select_syntax, ')')))),
      prec.left(3, seq($.expression, optional($.kw_not), $.kw_like, $.expression, optional(seq($.kw_escape, $.expression)))),
      prec.left(4, seq($.expression, '||', $.expression)),
      prec.left(5, seq($.expression, choice('+', '-'), $.expression)),
      prec.left(6, seq($.expression, choice('*', '/'), $.expression)),
      prec.right(7, seq($.expression, '**', $.expression))
    ),

    unary_expression: $ => prec(8, choice(seq(choice('+', '-', $.kw_not), $.expression), seq($.kw_prior, $.expression))),

    variable: $ => choice(
      $.identifier, $.kw_this, $.class_identifier,
      // Встроенные переменные Oracle/PL/Plus
      $.kw_rownum, $.kw_sysdate, $.kw_systimestamp, $.kw_sqlerrm, $.kw_sqlcode,
      // Macro substitution (e.g. &Depn or &Macro(args))
      $.macro_substitution,
      // Глобальная переменная: ::[NAME]
      prec.left(10, seq('::', choice($.identifier, $.class_identifier))),
      prec.left(12, seq($.variable, '(', optional($.expression_list), ')')),
      prec.left(10, seq($.function_call_expression, '.', choice($.identifier, $.quoted_identifier, $.number, $.class_identifier, $.collection_method_name))),
      prec.left(10, seq($.function_call_expression, $.class_identifier)),
      prec.left(10, seq($.variable, '.', choice($.identifier, $.quoted_identifier, $.number, $.class_identifier, $.collection_method_name))),
      prec.left(10, seq($.variable, '.', '[', $.number, ']')),  // Array subscript: arr.[0]
      prec.left(10, seq($.variable, '->', choice($.identifier, $.quoted_identifier, $.class_identifier))),
      prec.left(10, seq($.variable, '->', '(', optional($.expression_list), ')')),
      prec.left(10, seq($.variable, '->', '(', optional($.expression_list), ')', choice($.identifier, $.quoted_identifier, $.class_identifier))),  // var->(expr_list)[FIELD] cast/access
      prec.left(10, seq($.variable, $.class_identifier)),
      prec.left(10, seq($.variable, '=>', choice($.identifier, $.quoted_identifier, $.class_identifier))),
      prec.left(10, seq($.variable, '::', choice($.identifier, $.quoted_identifier, $.class_identifier))),
      prec.left(11, seq($.variable, '%', $.modifier_name, optional(seq('(', sep1($.expression, ','), ')')))),
      // Typed operator-modifier %% (PL/Plus Docs §1.8): in a select/where, always joins
      // to the table that declares the dereferenced ref, even for inherited attributes.
      prec.left(11, seq($.variable, '%', '%', $.modifier_name, optional(seq('(', sep1($.expression, ','), ')')))),
      // %locate as expression: collection%locate(x [exact] [all|collections] [nostatic] [where cond] [group ...] [order ...] [offset ...] [lock ...])
      prec.left(11, seq($.variable, '%', $.kw_locate, '(', $.identifier, optional($.kw_exact), optional(choice($.kw_all, $.kw_collections)), optional($.kw_nostatic), optional($.where_clause), optional($.group_clause), optional($.order_clause), optional($.offset_clause), optional($.lock_clause), ')')),
      // pct_* tokens used as expression modifiers: x%rowtype('prefix=R'), x%id, x%type, x%rowtable
      prec.left(11, seq($.variable, $.pct_rowtype, optional(seq('(', sep1($.expression, ','), ')')))),
      prec.left(11, seq($.variable, $.pct_rowtable, optional(seq('(', sep1($.expression, ','), ')')))),
      prec.left(11, seq($.variable, $.pct_type, optional(seq('(', sep1($.expression, ','), ')')))),
      prec.left(11, seq($.variable, $.pct_id, optional(seq('(', sep1($.expression, ','), ')')))),
      prec.left(11, seq($.variable, $.pct_rowid)),
      // Collection/array indexing: collection(idx) or func(args)
      prec.left(12, seq($.variable, '(', optional($.expression_list), ')'))
    ),

    modifier_name: $ => choice(
      caseInsensitive('id'), caseInsensitive('class'), caseInsensitive('classname'), caseInsensitive('state'), caseInsensitive('statename'),
      caseInsensitive('collection'), caseInsensitive('parent'), caseInsensitive('parentclass'), caseInsensitive('classparent'), caseInsensitive('lock'),
      caseInsensitive('rowtype'), caseInsensitive('rowtable'), caseInsensitive('type'),
      caseInsensitive('arch'), caseInsensitive('scan'), caseInsensitive('delete'),
      caseInsensitive('init'), caseInsensitive('scn'), caseInsensitive('request'),
      caseInsensitive('check'), caseInsensitive('attrs'), caseInsensitive('compare'),
      caseInsensitive('getcollection'), caseInsensitive('access_obj'), caseInsensitive('access_ref'),
      caseInsensitive('ses'), caseInsensitive('orascn'), caseInsensitive('object'),
      // Collection methods
      caseInsensitive('insert'), caseInsensitive('count'), caseInsensitive('first'),
      caseInsensitive('last'), caseInsensitive('next'), caseInsensitive('prior'),
      caseInsensitive('exists'), caseInsensitive('trim'), caseInsensitive('extend'),
      caseInsensitive('clear'), caseInsensitive('remove'), caseInsensitive('size'),
      // Object property/method access
      caseInsensitive('value'),
      // Cursor attributes
      caseInsensitive('found'), caseInsensitive('notfound'), caseInsensitive('isopen'), caseInsensitive('rowcount'),
      caseInsensitive('bulk_rowcount'), caseInsensitive('bulk_exceptions')
    ),

    // Collection method names that are also keywords (for .method() syntax)
    collection_method_name: $ => choice(
      $.kw_delete, $.kw_exists, $.kw_first, $.kw_last, $.kw_prior,
      caseInsensitive('count'), caseInsensitive('next'), caseInsensitive('trim'),
      caseInsensitive('extend'), caseInsensitive('clear'), caseInsensitive('remove'),
      caseInsensitive('insert')
    ),

    assignment_expression: $ => seq($.variable, '=', $.expression),

    // Именованный аргумент: name == value или name := value
    named_argument: $ => prec(2, seq(
      choice($.identifier, $.variable),
      choice('==', ':='),
      $.expression
    )),

    // Аргумент вызова функции: выражение, именованный аргумент, или [FIELD]=value
    call_argument: $ => choice(
      $.named_argument,
      seq($.class_identifier, '=', $.expression),  // [CODE]='value'
      $.expression
    ),

    expression_list: $ => sep1($.call_argument, ','),
    literal: $ => choice($.number, $.string, $.kw_true, $.kw_false, $.kw_null),

    plsql_injection: $ => seq('-- begin pl/sql', repeat(/[^\r\n]+/), '-- end pl/sql'),
    
    exception_block: $ => seq($.kw_exception, repeat1(seq($.kw_when, choice(seq($.kw_others, $.kw_all), $.expression, $.kw_others), $.kw_then, $.seq_of_statements)))
  }
});

function sep1(rule, separator) { return seq(rule, repeat(seq(separator, rule))); }
// Override token() to identity — needed for compatibility with existing grammar.
// Making pct_type/comment/etc. actual lexer tokens via built-in token() causes regressions.
function token(rule) { return rule; }

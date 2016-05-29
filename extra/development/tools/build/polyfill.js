//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
if (!String.prototype.trim) {
  (function() {
    // �������� BOM � ����������� ������
    String.prototype.trim = function() {
      return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
  })();
}
// КЛАСС Api ДЛЯ ОБРАЩЕНИЯ К Api
class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  // ФОРМИРОВАНИЕ ЗААПРОСА НА СЕРВЕР
  _handleTransferReq(res) {
    if (res.ok) {
      return Promise.resolve(res.json());
    }

    // ЕСЛИ ВЕРНУЛИ ОШИБКУ - ОТКЛОНЯЕМ ПРОМИС
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  // МЕТОД ЗАГРУЗКИ ИНОФРМАЦИИ О ЮЗЕРЕ С СЕРВЕРА
  async getUserInfo() {
    const response = await fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    });
    return this._handleTransferReq(response);
  }

  // ЗАГРУЖАЕМ КАРТОЧКИ С СЕРВЕРА С ПОМОЩЬЮ МЕТОДА async
  async getCards() {
    const response = await fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    });
    return this._handleTransferReq(response);
  }

  // МЕТОД РЕДАКТИРОВАНИЯ ПРОФИЛЯ
  async editProfileUser(data) {
    const response = await fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    });
    return this._handleTransferReq(response);
  }

  // МЕТОД ДОБАВЛЕННИЯ НОВОЙ КАРТОЧКИ С СЕРВЕРА
  async createCard(data) {
    const response = await fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    });
    return this._handleTransferReq(response);
  }

  // МЕТОД РАЛИЗАЦИИ ЛАЙКА КАРТОЧКИ
  async putLike(cardId) {
    const response = await fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    });
    return this._handleTransferReq(response);
  }

  // МЕТОД Delete ДЛЯ КАРТОЧКИ
  async deleteCard(cardId) {
    const response = await fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    });
    return this._handleTransferReq(response);
  }

  // МЕТОД ЛАЙКА И ДИЗЛАЙКА КАРТОЧКИ
  async deleteLike(cardId) {
    const response = await fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    });
    return this._handleTransferReq(response);
  }

  // МЕТОД РЕДАКТИРОВАНИЯ АВАТАРКИ ЮЗЕРА
  async editProfileAvatar(data) {
    const response = await fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    });
    return this._handleTransferReq(response);
  }
}

// ЭКЗЕМПЛЯР КЛАССА Api
const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-65",
  headers: {
    authorization: "3214d118-6e50-4726-ad0d-555baedd0477",
    "Content-Type": "application/json",
  },
});

export default api;
